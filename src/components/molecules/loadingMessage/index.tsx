import { Card } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export default function LoadingMessage() {
  return (
    <Card
      py="0.625rem"
      px="0.75rem"
      variant="unstyled"
      colorScheme="blue"
      w="max-content"
      h="2.5rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <PulseLoader size={8} speedMultiplier={0.8} color="#9A9A9A" />
    </Card>
  );
}
