import {
  INPUT_METHOD_ENUM,
  inputMethodState,
  isInputButtonLoading,
  refreshGreetingState,
} from "@/src/commons/libraries/recoil/recoil";
import MessageInput from "@/src/components/molecules/messageInput";
import MicrophoneInput from "@/src/components/molecules/microphoneInput";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function SectionLayoutInputArea({}) {
  const inputMethod = useRecoilValue(inputMethodState);
  const setRefreshGreeting = useSetRecoilState(refreshGreetingState);
  const [isLoading, setIsLoading] = useRecoilState(isInputButtonLoading);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="section"
      id="input-area"
      m={0}
      width="inherit"
      maxW="40rem"
      height="100%"
      h={inputMethod === INPUT_METHOD_ENUM.keyboard ? "4rem" : "5.5rem"}
      borderRadius="0px"
      position="fixed"
      pr="0.625rem"
      pl="0.25rem"
      bottom={0}
    >
      <Flex
        id="hi"
        gap={0}
        w="100%"
        maxW="40rem"
        alignItems="center"
        h="inherit"
        bgColor={colorMode === "light" ? "white" : "gray.800"}
        borderRadius="0px"
      >
        <IconButton
          aria-label="refreshButton"
          icon={
            <RefreshOutlinedIcon
              fontSize={
                inputMethod === INPUT_METHOD_ENUM.keyboard ? "medium" : "large"
              }
            />
          }
          variant={{ base: "unstyled", sm: "ghost" }}
          disabled={isLoading}
          onClick={() => setRefreshGreeting(true)}
          pl="0px"
        />
        {inputMethod === INPUT_METHOD_ENUM.keyboard ? (
          <MessageInput />
        ) : (
          <MicrophoneInput />
        )}
      </Flex>
    </Flex>
  );
}
