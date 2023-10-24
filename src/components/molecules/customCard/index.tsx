import { openPageInNewTab } from "@/commons/utils/openPageInNewTab";
import { Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

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
  return (
    <Card
      p="0.5rem"
      variant="unstyled"
      colorScheme="blue"
      gap="0.625rem"
      bgColor="blue.50"
      //   maxW="16rem"
      w={{ base: "45%", md: "30%" }}
      minW={{ base: "16rem", md: "30%" }}
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
              // postback onclick
            >
              {button.buttonText}
            </Button>
          );
        })}
      </Flex>
    </Card>
  );
}
