import {
  INPUT_METHOD_ENUM,
  inputMethodState,
  isInputButtonLoading,
  refreshGreetingState,
} from "@/src/commons/libraries/recoil/recoil";
import MessageInput from "@/src/components/molecules/messageInput";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const MicrophoneInput = dynamic(
  () => import("../../../molecules/microphoneInput")
);

export default function SectionLayoutInputArea({}) {
  const inputMethod = useRecoilValue(inputMethodState);
  const setRefreshGreeting = useSetRecoilState(refreshGreetingState);
  const isLoading = useRecoilValue(isInputButtonLoading);
  const { colorMode } = useColorMode();
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const realColorMode = localStorage.getItem("chakra-ui-color-mode");

    setBgColor(realColorMode === "light" ? "white" : "gray.800");
  }, [colorMode]);

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
        bgColor={bgColor}
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
