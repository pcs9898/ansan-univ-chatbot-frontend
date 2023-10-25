import {
  inputMethodEnum,
  inputMethodState,
} from "@/src/commons/libraries/recoil/recoil";
import MessageInput from "@/src/components/molecules/messageInput";
import MicrophoneInput from "@/src/components/molecules/microphoneInput";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function SectionLayoutInputArea({}) {
  const inputMethod = useRecoilValue(inputMethodState);
  return (
    <Flex
      as="section"
      id="input-area"
      p={0}
      m={0}
      width="100%"
      // h={{ base: "3.5rem", md: "5rem" }}
      h="3.5rem"
      pl="0.125rem"
      pr="0.625rem"
      position="fixed"
      bottom={0}
      left={0}
      bg="white"
      zIndex={1}
      borderRadius={0}
    >
      {inputMethod === inputMethodEnum.keyboard ? (
        <MessageInput />
      ) : (
        <MicrophoneInput />
      )}
    </Flex>
  );
}
