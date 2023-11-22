import { Box, Flex, VStack } from "@chakra-ui/react";
import GreetingOrFail from "../../organisms/greetingOrFail";
import MyMessageWithFormat from "../../organisms/myMessageWithFormat";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  INPUT_METHOD_ENUM,
  inputMethodState,
  messageTextState,
} from "@/src/commons/libraries/recoil/recoil";
import { css } from "@emotion/react";

interface IHomePresenterProps {
  renderedChatList: any;
  bottomListRef: MutableRefObject<any>;
}

export default function HomePresenter({
  renderedChatList,
  bottomListRef,
}: IHomePresenterProps) {
  const inputMethod = useRecoilValue(inputMethodState);

  return (
    <VStack
      gap="1rem"
      px="1rem"
      ref={bottomListRef}
      w="100%"
      height={
        inputMethod === INPUT_METHOD_ENUM.keyboard
          ? "calc(100vh - 9rem)"
          : "calc(100vh - 10.5rem)"
      }
      overflowY="auto"
      borderRadius="0px"
      overflowX="hidden"
      pt="1rem"
      pb="2rem"
      //@ts-ignore
      styles={css`
        /* Chrome, Edge, and Safari */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
      `}
    >
      {renderedChatList}
    </VStack>
  );
}
