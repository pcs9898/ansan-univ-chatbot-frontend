import { Flex } from "@chakra-ui/react";
import FormatTime from "../../molecules/formatTime";
import MyMessage from "../../molecules/myMessage";

interface IMyMessageWithFormatProps {
  text: string;
}

export default function MyMessageWithFormat({
  text,
}: IMyMessageWithFormatProps) {
  return (
    <Flex alignItems="flex-end" flexDir="column" w="100%">
      <MyMessage text={text} />
      <FormatTime />
    </Flex>
  );
}
