import { useMutation } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { QueryTextMutation } from "./home.quries";
import { useEffect, useRef, useState } from "react";

import HomePresenter from "../../templates/home/home.presenter";
import {
  isInputButtonLoading,
  languageCodeState,
  messageTextState,
  refreshGreetingState,
} from "@/src/commons/libraries/recoil/recoil";
import MyMessageWithFormat from "../../organisms/myMessageWithFormat";
import GreetingOrFail from "../../organisms/greetingOrFail";
import CustomCards from "../../organisms/customCards";

enum SENDER_ENUM {
  bot = "bot",
  user = "user",
}

interface IChat {
  sender: SENDER_ENUM;
  message: any;
}

export default function HomeContainer() {
  const [isLoading, setIsLoading] = useRecoilState(isInputButtonLoading);
  const [messageText, setMessageText] = useRecoilState(messageTextState);
  const [refreshGreeting, setRefreshGreeting] =
    useRecoilState(refreshGreetingState);
  const languageCode = useRecoilValue(languageCodeState);
  const [chatList, setChatList] = useState([] as any);
  const bottomListRef = useRef(null);

  const queryTextMutation = useMutation({
    mutationFn: QueryTextMutation,
    onSuccess(data) {
      if (data === "fail") {
        const newMessage = {
          sender: SENDER_ENUM.bot,
          message: "fail",
        };
        addNewMessage(newMessage);
      } else {
        const newMessage = {
          sender: SENDER_ENUM.bot,
          message: data.cardList,
        };

        addNewMessage(newMessage);
      }
    },
    onError(error) {
      throw new Error(error.message);
    },
    onSettled() {
      setIsLoading(false);
      setMessageText("");
    },
  });

  useEffect(() => {
    const newMessage = {
      sender: SENDER_ENUM.bot,
      message: "greeting",
    };
    addNewMessage(newMessage);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const newMessage = {
        sender: SENDER_ENUM.user,
        message: messageText,
      };
      addNewMessage(newMessage);

      queryTextMutation.mutate({ message: messageText, languageCode });
    }
  }, [isLoading]);

  useEffect(() => {
    if (refreshGreeting) {
      const newMessage = {
        sender: SENDER_ENUM.bot,
        message: "greeting",
      };

      addNewMessage(newMessage);
      setRefreshGreeting(false);
    }
  }, [refreshGreeting]);

  const addNewMessage = (newMessage) => {
    setChatList((prevList) => [...prevList, newMessage]);
  };

  const renderedChatList = chatList.map((chat: IChat, i) => {
    if (chat.sender === SENDER_ENUM.user) {
      return <MyMessageWithFormat key={i} text={chat.message} />;
    } else if (chat.sender === SENDER_ENUM.bot) {
      if (chat.message === "greeting") {
        return <GreetingOrFail key={i} greetingOrFailOption="greeting" />;
      } else if (chat.message === "fail") {
        return <GreetingOrFail key={i} greetingOrFailOption="fail" />;
      } else {
        return <CustomCards key={i} cardsProps={chat.message} />;
      }
    }
  });

  console.log(renderedChatList);

  useEffect(() => {
    if (bottomListRef.current) {
      setTimeout(() => {
        bottomListRef.current.scrollTop = bottomListRef.current.scrollHeight;
      }, 5);
    }
  }, [renderedChatList]);

  if (queryTextMutation.isPending) {
    renderedChatList.push(<CustomCards isLoading={true} />);
  }

  return (
    <HomePresenter
      renderedChatList={renderedChatList}
      bottomListRef={bottomListRef}
    />
  );
}
