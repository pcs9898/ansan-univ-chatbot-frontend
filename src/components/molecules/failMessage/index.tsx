import { Box, Card, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export default function FailMessage() {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card
      py="0.625rem"
      px="0.75rem"
      variant="unstyled"
      colorScheme="blue"
      gap="0.625rem"
      bgColor={colorMode === "light" ? "cardBgColorLight" : "cardBgColorDark"}
      maxW={{ base: "85%", sm: "21.25rem" }}
      h="max-content"
    >
      <Text fontSize="1rem" fontWeight="medium">
        {t("failMessage1")}
      </Text>
      <Text fontSize="1rem" fontWeight="medium">
        {t("failMessage2")}
      </Text>
    </Card>
  );
}
