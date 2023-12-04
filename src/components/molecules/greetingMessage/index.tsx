import { Card, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function GreetingMessage() {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const realColorMode = localStorage.getItem("chakra-ui-color-mode");

    setBgColor(realColorMode === "light" ? "cardBgColorLight" : "gray.700");
  }, [colorMode]);

  return (
    <Card
      py="0.625rem"
      px="0.75rem"
      variant="unstyled"
      colorScheme="blue"
      gap="0.625rem"
      bgColor={bgColor}
      maxW={{ base: "85%", sm: "21.25rem" }}
    >
      <Text fontSize="1rem" fontWeight="medium" whiteSpace="normal">
        {t("greetingMsg1")}
      </Text>
      <Text fontSize="1rem" fontWeight="medium" whiteSpace="normal">
        {t("greetingMsg2")}
      </Text>
    </Card>
  );
}
