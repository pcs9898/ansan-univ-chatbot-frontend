import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export default function CustomAvatar({}) {
  const { t } = useTranslation();

  return (
    <Flex alignItems="center" gap="0.25rem">
      <Avatar src="/avatarImage.png" w="2.5rem" h="2.5rem" />
      <Text fontWeight="bold" fontSize="0.875rem">
        {t("customAvatarName")}
      </Text>
    </Flex>
  );
}
