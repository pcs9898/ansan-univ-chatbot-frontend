import { Box, Flex, Image } from "@chakra-ui/react";
import CustomAvatar from "../../molecules/customAvatar";
import GreetingImage from "../../molecules/greetingImage";
import GreetingMessage from "../../molecules/greetingMessage";
import FailMessage from "../../molecules/failMessage";
import GreetingCard from "../../molecules/greetingCard";
import FormatTime from "../../molecules/formatTime";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

interface IGreetingOrFailProps {
  greetingOrFailOption: "greeting" | "fail";
}

export default function GreetingOrFail({
  greetingOrFailOption,
}: IGreetingOrFailProps) {
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
