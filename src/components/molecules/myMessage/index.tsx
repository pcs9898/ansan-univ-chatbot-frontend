import { Card, Text } from "@chakra-ui/react";

interface IMyMessageProps {
  text: string;
}

export default function MyMessage({ text }: IMyMessageProps) {
  return (
    <Card
      py="0.625rem"
      px="0.75rem"
      variant="unstyled"
      colorScheme="blue"
      bgColor="myMessageColorLight"
      // w="max-content"
      color="white"
    >
      <Text fontWeight="medium" fontSize="1rem" whiteSpace="normal">
        {text}
      </Text>
    </Card>
  );
}
