import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  isInputButtonLoading,
  messageTextState,
} from "@/src/commons/libraries/recoil/recoil";
import { ChangeEvent, useState } from "react";

export default function MessageInput() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useRecoilState(isInputButtonLoading);
  const setMessageText = useSetRecoilState(messageTextState);
  const [text, setText] = useState("");
  const { colorMode } = useColorMode();

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
            bgColor="sendMsgBtnBgColorLight"
            borderRadius="1rem"
            onClick={() => onSubmitQueryTextMutation()}
            mr="0.875rem"
          >
            <Image
              alt="send button"
              src="/inputSendIcon.svg"
              w="1.5rem"
              h="1.5rem"
              style={{ fill: "myMessageColorLight" }}
            />
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
}
