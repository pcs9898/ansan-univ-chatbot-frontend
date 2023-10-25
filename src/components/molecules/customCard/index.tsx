import { eventNameState } from "@/src/commons/libraries/recoil/recoil";
import { openPageInNewTab } from "@/src/commons/utils/openPageInNewTab";
import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

interface ICustomCardProps {
  customCardProps: {
    texts: string[];
    buttons?: {
      buttonText: string;
      link?: string;
      postBack?: string;
    }[];
  };
}

export default function CustomCard({ customCardProps }: ICustomCardProps) {
  const { texts, buttons } = customCardProps;
  const setEventName = useSetRecoilState(eventNameState);

  return (
    <Card
      p="0.5rem"
      variant="unstyled"
      colorScheme="blue"
      gap="0.625rem"
      bgColor="blue.50"
      w={{ base: "68%", md: "40%", lg: "30%" }}
      minW={{ base: "68%", md: "40%", lg: "30%" }}
    >
      <Box>
        {texts.map((text, i) => {
          if (!text) {
            return <Text key={i}>&nbsp;</Text>;
          }
          return (
            <Text key={i} fontSize="0.875rem" fontWeight="medium">
              {text}
            </Text>
          );
        })}
      </Box>
      <Flex w="100%" gap="0.375rem" flexDir="column">
        {buttons?.map((button, i) => {
          return button.link ? (
            <Button
              key={i}
              fontSize="0.875rem"
              fontWeight="semibold"
              bgColor="white"
              color="black"
              w="100%"
              onClick={() => button.link && openPageInNewTab(button.link)}
            >
              {button.buttonText}
            </Button>
          ) : (
            <Button
              key={i}
              fontSize="0.875rem"
              fontWeight="semibold"
              bgColor="white"
              color="black"
              w="100%"
              onClick={() => setEventName(button.postBack)}
            >
              {button.buttonText}
            </Button>
          );
        })}
      </Flex>
    </Card>
  );
}
