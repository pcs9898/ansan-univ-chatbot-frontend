import { Flex } from "@chakra-ui/react";
import CustomAvatar from "../../molecules/customAvatar";
import FormatTime from "../../molecules/formatTime";
import GreetingCard from "../../molecules/greetingCard";
import GreetingMessage from "../../molecules/greetingMessage";
import dynamic from "next/dynamic";
import { memo } from "react";

const FailMessage = dynamic(() => import("../../molecules/failMessage"));

interface IGreetingOrFailProps {
  greetingOrFailOption: "greeting" | "fail";
}

function GreetingOrFail({ greetingOrFailOption }: IGreetingOrFailProps) {
  return (
    <Flex gap="0.5rem" w="100%">
      <CustomAvatar />

      <Flex gap="0.5rem" flexDir="column" w="100%">
        {greetingOrFailOption === "greeting" ? (
          <GreetingMessage />
        ) : (
          <FailMessage />
        )}

        <Flex flexDir="column" w="100%">
          <GreetingCard />
          <FormatTime />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GreetingOrFail;
