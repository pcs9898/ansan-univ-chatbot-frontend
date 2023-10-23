import { Button, HStack, IconButton, Input } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useTranslation } from "next-i18next";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BeatLoader from "react-spinners/BeatLoader";

interface IMsgInputProps {
  isButtonLoading: boolean;
}

export default function MsgInput({ isButtonLoading }: IMsgInputProps) {
  const { t } = useTranslation();

  return (
    <HStack gap="0.625rem">
      <IconButton
        aria-label="refreshButton"
        icon={<RefreshOutlinedIcon />}
        variant="ghost"

        // onclick refresh implement
      />
      <Input placeholder={t("msgInputText")} variant="filled" />
      <IconButton
        aria-label="sendMessageButton"
        icon={<SendOutlinedIcon />}
        colorScheme="blue"
        isLoading={isButtonLoading}
        p="1rem"
        // spinner={<BeatLoader size={8} />}
      />
    </HStack>
  );
}
