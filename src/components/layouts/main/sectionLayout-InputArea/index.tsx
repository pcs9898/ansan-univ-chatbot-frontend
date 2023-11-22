import {
  INPUT_METHOD_ENUM,
  inputMethodState,
} from "@/src/commons/libraries/recoil/recoil";
import MessageInput from "@/src/components/molecules/messageInput";
import MicrophoneInput from "@/src/components/molecules/microphoneInput";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

export default function SectionLayoutInputArea({}) {
  const inputMethod = useRecoilValue(inputMethodState);

  return (
    <Flex
      as="section"
      id="input-area"
      p={0}
      m={0}
      width="100%"
      h={inputMethod === INPUT_METHOD_ENUM.keyboard ? "4rem" : "8rem"}
      position="fixed"
      bottom={0}
      left={0}
      zIndex={1}
      borderRadius={0}
      justifyContent="center"
    >
      {inputMethod === INPUT_METHOD_ENUM.keyboard ? (
        <MessageInput />
      ) : (
        <MicrophoneInput />
      )}
    </Flex>
  );
}
