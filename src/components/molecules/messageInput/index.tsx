import { Button, HStack, IconButton, Input } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useTranslation } from "next-i18next";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BeatLoader from "react-spinners/BeatLoader";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { ChangeEvent } from "react";
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  const onSubmitQueryTextMutation = () => {
    if (messageText !== "") {
      setIsLoading(true);
    }
  };

  return (
    <HStack gap={0} h="100%" w="100%">
      <IconButton
        aria-label="refreshButton"
        icon={<RefreshOutlinedIcon />}
        variant="ghost"
        disabled={isLoading}
        onClick={() => setRefreshGreeting(true)}
        // onclick refresh implement
      />

      <Input
        placeholder={t("msgInputText")}
        variant="filled"
        value={eventName !== "" ? "" : messageText}
        onChange={handleInputChange}
        disabled={isLoading}
        onKeyUp={(e) => {
          if (e.key === "Enter" && messageText !== "") {
            onSubmitQueryTextMutation();
          }
        }}
        mr="0.625rem"
      />

      <IconButton
        aria-label="sendMessageButton"
        icon={<SendOutlinedIcon />}
        colorScheme="blue"
        isDisabled={messageText === "" || eventName !== ""}
        isLoading={isLoading}
        onClick={() => onSubmitQueryTextMutation()}
        p="1rem"
        spinner={<BeatLoader size={8} />}
      />
    </HStack>
  );
}
