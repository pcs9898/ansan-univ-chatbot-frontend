import CustomAvatar from "@/components/molecules/customAvatar";
import FailMessage from "@/components/molecules/failMessage";
import FormatTime from "@/components/molecules/formatTime";
import GreetingCard from "@/components/molecules/greetingCard";
import GreetingImage from "@/components/molecules/greetingImage";
import GreetingMessage from "@/components/molecules/greetingMessage";
import { Box, Flex } from "@chakra-ui/react";

interface IGreetingOrFailProps {
  greetingOrFailOption: "greeting" | "fail";
}

export default function GreetingOrFail({
  greetingOrFailOption,
}: IGreetingOrFailProps) {
  return (
    <Box>
      <CustomAvatar />

      <Flex ml="2.5rem" gap="0.5rem" flexDir="column">
        <Flex gap="0.25rem" alignItems="center" w={{ base: "75%", md: "50%" }}>
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
