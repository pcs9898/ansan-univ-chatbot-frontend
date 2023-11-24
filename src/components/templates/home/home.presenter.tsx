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
}

export default function HomePresenter({
  renderedChatList,
}: IHomePresenterProps) {
  const inputMethod = useRecoilValue(inputMethodState);

  return (
    <VStack
      gap="1rem"
      px="1rem"
      w="100%"
      pt="6rem"
      pb={inputMethod === INPUT_METHOD_ENUM.keyboard ? "6rem" : "7.5rem"}
    >
      {renderedChatList}
    </VStack>
  );
}
