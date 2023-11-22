import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useTranslation } from "next-i18next";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BeatLoader from "react-spinners/BeatLoader";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { ChangeEvent, useState } from "react";
import {
  eventNameState,
  isInputButtonLoading,
  messageTextState,
  refreshGreetingState,
} from "@/src/commons/libraries/recoil/recoil";

export default function MessageInput() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useRecoilState(isInputButtonLoading);
  const [messageText, setMessageText] = useRecoilState(messageTextState);
  const eventName = useRecoilValue(eventNameState);
  const setRefreshGreeting = useSetRecoilState(refreshGreetingState);
  const [text, setText] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitQueryTextMutation = () => {
    if (text !== "") {
      setText("");
      setMessageText(text);
      setIsLoading(true);
    }
  };

  return (
    <Flex gap={0} h="100%" w="100%" alignItems="center" px="0.625rem">
      <IconButton
        aria-label="refreshButton"
        icon={<RefreshOutlinedIcon />}
        variant="ghost"
        disabled={isLoading}
        onClick={() => setRefreshGreeting(true)}
        pl="0px"
      />

      <InputGroup display="flex" alignItems="center">
        <Input
          placeholder={t("msgInputText")}
          fontWeight="medium"
          variant="unstyled"
          value={text}
          onChange={handleInputChange}
          disabled={isLoading}
          onKeyUp={(e) => {
            if (e.key === "Enter" && text !== "") {
              onSubmitQueryTextMutation();
            }
          }}
          bgColor={colorMode === "light" ? "cardBgColorLight" : "gray.700"}
          borderRadius="1.125rem"
          h="3rem"
          px="0.875rem"
        />
        {text && (
          <InputRightElement h="3rem" display="flex" alignItems="center">
            <Button
              h="2.5rem"
              p="0px"
              bgColor="#D2D7F4"
              borderRadius="1rem"
              onClick={() => onSubmitQueryTextMutation()}
              mr="0.875rem"
            >
              <Image
                alt="send button"
                src="/inputSendIcon.svg"
                w="1.5rem"
                h="1.5rem"
                style={{ fill: "#3857E3" }}
              />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  );
}
