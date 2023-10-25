import { Box, Flex, VStack } from "@chakra-ui/react";
import GreetingOrFail from "../../organisms/greetingOrFail";
import MyMessageWithFormat from "../../organisms/myMessageWithFormat";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { messageTextState } from "@/src/commons/libraries/recoil/recoil";

interface IHomePresenterProps {
  renderedChatList: any;
  bottomListRef: MutableRefObject<any>;
}

export default function HomePresenter({
  renderedChatList,
  bottomListRef,
}: IHomePresenterProps) {
  return (
    <VStack
      gap="1rem"
      px="0.625rem"
      pt="1rem"
      ref={bottomListRef}
      w="100%"
      height="calc(100vh - 7rem)"
      overflowY="auto"
    >
      {renderedChatList}
    </VStack>
  );
}
