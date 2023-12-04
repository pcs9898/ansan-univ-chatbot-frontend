import { Flex } from "@chakra-ui/react";
import FormatTime from "../../molecules/formatTime";
import MyMessage from "../../molecules/myMessage";
import { memo } from "react";

interface IMyMessageWithFormatProps {
  text: string;
}

function MyMessageWithFormat({ text }: IMyMessageWithFormatProps) {
  return (
    <Flex alignItems="flex-end" flexDir="column" w="100%">
      <MyMessage text={text} />
      <FormatTime />
    </Flex>
  );
}

export default memo(MyMessageWithFormat);
