import { Card } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export default function LoadingMessage() {
  return (
    <Card
      p="1rem"
      pl="0px"
      variant="unstyled"
      colorScheme="blue"
      w="max-content"
      display="flex"
      alignItems="center"
    >
      <PulseLoader size={8} speedMultiplier={0.8} color="#9A9A9A" />
    </Card>
  );
}
