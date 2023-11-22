import {
  INPUT_METHOD_ENUM,
  inputMethodState,
  isInputButtonLoading,
  refreshGreetingState,
} from "@/src/commons/libraries/recoil/recoil";
import MessageInput from "@/src/components/molecules/messageInput";
import MicrophoneInput from "@/src/components/molecules/microphoneInput";
import { Flex, IconButton } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function SectionLayoutInputArea({}) {
  const inputMethod = useRecoilValue(inputMethodState);
  const setRefreshGreeting = useSetRecoilState(refreshGreetingState);
  const [isLoading, setIsLoading] = useRecoilState(isInputButtonLoading);

  return (
    <Flex
      as="section"
      id="input-area"
      p={0}
      m={0}
      width="100%"
      h={inputMethod === INPUT_METHOD_ENUM.keyboard ? "4rem" : "5.5rem"}
      position="fixed"
      bottom={0}
      left={0}
      zIndex={1}
      borderRadius={0}
      justifyContent="center"
    >
      <Flex gap={0} h="100%" w="100%" alignItems="center" px="0.625rem">
        <IconButton
          aria-label="refreshButton"
          icon={
            <RefreshOutlinedIcon
              fontSize={
                inputMethod === INPUT_METHOD_ENUM.keyboard ? "medium" : "large"
              }
            />
          }
          variant="ghost"
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
