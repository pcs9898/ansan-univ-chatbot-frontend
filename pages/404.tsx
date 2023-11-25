import { withTranslations } from "@/src/commons/utils/withTranslations";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { PulseLoader } from "react-spinners";
import Cookies from "js-cookie";

export const getStaticProps = withTranslations();

export default function Custom404() {
  const router = useRouter();
  const { t } = useTranslation();

  const toast = useToast();

  useEffect(() => {
    const preferredLocale = Cookies.get("locale");

    if (preferredLocale) {
      router.push(`/${preferredLocale}`);
    } else {
      Cookies.set("locale", router.locale);
      router.push("/");
    }

    toast({
      status: "error",
      title: t("404PageText"),
      position: "top",
      isClosable: true,
    });
  }, []);

  return (
    <Flex h="100dvh" w="100vw" justifyContent="center" alignItems="center">
      <PulseLoader size={35} speedMultiplier={0.8} color="#9A9A9A" />
    </Flex>
  );
}
