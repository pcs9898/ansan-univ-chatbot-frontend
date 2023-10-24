import { Box, Card, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export default function FailMessage() {
  const { t } = useTranslation();

  return (
    <Card
      p="0.5rem"
      variant="unstyled"
      colorScheme="blue"
      gap="0.625rem"
      bgColor="blue.50"
      w="100%"
      borderTopLeftRadius="0px"
      h="max-content"
    >
      <Text fontSize="0.875rem" fontWeight="normal">
        {t("failMessage1")}
      </Text>
      <Text fontSize="0.875rem" fontWeight="normal">
        {t("failMessage2")}
      </Text>
    </Card>
  );
}
