import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { useRecoilState } from "recoil";
import MyMessage from "../../molecules/myMessage";
import FormatTime from "../../molecules/formatTime";

interface IMyMessageWithFormatProps {
  text: string;
}

export default function MyMessageWithFormat({
  text,
}: IMyMessageWithFormatProps) {
  return (
    <Flex alignItems="flex-end" flexDir="column" gap="0.25rem" w="100%">
      <MyMessage text={text} />
      <FormatTime />
    </Flex>
  );
}
