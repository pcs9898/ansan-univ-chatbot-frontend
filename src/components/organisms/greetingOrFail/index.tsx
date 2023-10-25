import { Box, Flex } from "@chakra-ui/react";
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
    <Box w="100%">
      <CustomAvatar />

      <Flex
        ml="2.5rem"
        gap="0.5rem"
        flexDir="column"
        w={{ base: "72%", lg: "50%" }}
      >
        <Flex gap="0.25rem" alignItems="center">
          <GreetingImage />

          {greetingOrFailOption === "greeting" ? (
            <GreetingMessage />
          ) : (
            <FailMessage />
          )}
        </Flex>

        <Flex flexDir="column" gap="0.25rem">
          <GreetingCard />
          <FormatTime />
        </Flex>
      </Flex>
    </Box>
  );
}
