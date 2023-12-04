import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { QueryEventMutation, QueryTextMutation } from "./home.quries";

import {
  LANGUAGE_CODE_ENUM,
  bottomListRefState,
  eventNameState,
  inputMethodState,
  isInputButtonLoading,
  languageCodeState,
  messageTextState,
  refreshGreetingState,
} from "@/src/commons/libraries/recoil/recoil";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CustomCards from "../../organisms/customCards";
import GreetingOrFail from "../../organisms/greetingOrFail";
import MyMessageWithFormat from "../../organisms/myMessageWithFormat";
import HomePresenter from "../../templates/home/home.presenter";

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
  const [eventName, setEventName] = useRecoilState(eventNameState);
  const bottomListRef = useRecoilValue(bottomListRefState);
  const [refreshGreeting, setRefreshGreeting] =
    useRecoilState(refreshGreetingState);
  const [chatList, setChatList] = useState([
    { sender: SENDER_ENUM.bot, message: "greeting" },
  ]);
  const router = useRouter();
  const [languageCode, setLanguageCode] = useRecoilState(languageCodeState);
  const inputMethod = useRecoilValue(inputMethodState);
  const [firstRender, setFirstRender] = useState(true);

  const queryTextMutation = useMutation({
    mutationFn: QueryTextMutation,
    onSuccess(data) {
      if (data === "fail") {
        const newMessage = {
          sender: SENDER_ENUM.bot,
          message: "fail",
        };
        addNewMessage(newMessage);
      } else if (data === "greeting") {
        const newMessage = {
          sender: SENDER_ENUM.bot,
          message: "greeting",
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

  const queryEventMutation = useMutation({
    mutationFn: QueryEventMutation,
    onSuccess(data) {
      const newMessage = {
        sender: SENDER_ENUM.bot,
        message: data.cardList,
      };
      addNewMessage(newMessage);
    },
    onError(error) {
      throw new Error(error.message);
    },
    onSettled() {
      setMessageText("");
      setEventName("");
    },
  });

  useEffect(() => {
    const preferredLocale = Cookies.get("locale");
    if (preferredLocale === "en") {
      setLanguageCode(LANGUAGE_CODE_ENUM.en);
    } else {
      setLanguageCode(LANGUAGE_CODE_ENUM.ko);
    }

    // const newMessage = {
    //   sender: SENDER_ENUM.bot,
    //   message: "greeting",
    // };
    // addNewMessage(newMessage);
  }, []);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    setChatList([
      {
        sender: SENDER_ENUM.bot,
        message: "greeting",
      },
    ]);

    // const newMessage = {
    //   sender: SENDER_ENUM.bot,
    //   message: "greeting",
    // };
    // addNewMessage(newMessage);
  }, [languageCode]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    const preferredLocale = Cookies.get("locale");
    if (router.locale !== preferredLocale) {
      router.push(router.pathname, router.asPath, { locale: preferredLocale });
      setChatList([]);

      const newMessage = {
        sender: SENDER_ENUM.bot,
        message: "greeting",
      };
      addNewMessage(newMessage);
    }
  }, [router.locale]);

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
    if (eventName !== "") {
      const newMessage = {
        sender: SENDER_ENUM.user,
        message: messageText,
      };
      addNewMessage(newMessage);

      queryEventMutation.mutate({ postback: eventName, languageCode });
    }
  }, [eventName]);

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

  useEffect(() => {
    if (bottomListRef?.current) {
      setTimeout(() => {
        bottomListRef.current.scrollTop = bottomListRef.current.scrollHeight;
      }, 5);
    }
  }, [inputMethod]);

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

  useEffect(() => {
    if (bottomListRef?.current) {
      setTimeout(() => {
        bottomListRef.current.scrollTop = bottomListRef.current.scrollHeight;
      }, 5);
    }
  }, [renderedChatList, bottomListRef]);

  if (queryTextMutation.isPending || queryEventMutation.isPending) {
    renderedChatList.push(
      <CustomCards isLoading={true} key={renderedChatList.length} />
    );
  }

  return <HomePresenter renderedChatList={renderedChatList} />;
}
