import { messageTextState } from "@/commons/libraries/recoil/recoil";
import FormatTime from "@/components/molecules/formatTime";
import MyMessage from "@/components/molecules/myMessage";
import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useRecoilState } from "recoil";

interface IMyMessageWithFormatProps {
  text: string;
}

export default function MyMessageWithFormat({
  text,
}: IMyMessageWithFormatProps) {
  return (
    <Flex alignItems="flex-end" flexDir="column" gap="0.25rem">
      <MyMessage text={text} />
      <FormatTime />
    </Flex>
  );
}
