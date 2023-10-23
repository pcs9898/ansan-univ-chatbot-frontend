import { Card, Text } from "@chakra-ui/react";

interface IMyMessageProps {
  text: string;
}

export default function MyMessage({ text }: IMyMessageProps) {
  return (
    <Card
      p="0.5rem"
      variant="unstyled"
      colorScheme="blue"
      bgColor="blue.300"
      //   maxW="16rem"
      w="max-content"
    >
      <Text fontWeight="normal" fontSize="0.875rem">
        {text}
      </Text>
    </Card>
  );
}
