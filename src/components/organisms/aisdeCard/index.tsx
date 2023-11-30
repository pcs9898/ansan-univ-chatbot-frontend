import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import QR from "qrcode.react";
import { useEffect, useState } from "react";

export default function AsideCard() {
  const { t } = useTranslation();
  const [pxValue, setPxValue] = useState(0);

  useEffect(() => {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );

    // const remValue = 16.375;
    const remValue = 10;
    const pxConvertedValue = remValue * rootFontSize;

    setPxValue(pxConvertedValue);
  }, []);

  return (
    <Flex
      id="aside"
      w="16.5rem"
      h="min-content"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="2.5rem"
    >
      <Text
        fontSize="2rem"
        fontWeight="extrabold"
        whiteSpace="normal"
        textAlign="center"
      >
        {t("headerChatbotName")}
        {"."}
      </Text>

      <Image alt="logoImage" src="/avatarImage.svg" w="12rem" />
      <Flex flexDir="column" gap="1rem">
        <Text fontWeight="bold" textAlign="center">
          {t("asideCardText")}
        </Text>
        <QR
          value={process.env.NEXT_PUBLIC_FRONTEND_URI}
          size={pxValue}
          id="qr-gen"
          level={"H"}
          includeMargin={true}
          bgColor="#D2D7F4"
          imageSettings={{
            src: "/avatarImage.svg",
            width: 40,
            height: 40,
            excavate: false,
          }}
        />
      </Flex>
    </Flex>
  );
}
