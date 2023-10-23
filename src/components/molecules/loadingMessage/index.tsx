import { Card } from "@chakra-ui/react";
import SyncLoader from "react-spinners/SyncLoader";

export default function LoadingMessage() {
  return (
    <Card
      p="1rem"
      variant="unstyled"
      colorScheme="blue"
      gap="0.625rem"
      bgColor="blue.50"
      w="max-content"
    >
      <SyncLoader size={12} speedMultiplier={0.8} />
    </Card>
  );
}
