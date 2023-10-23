import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export default function CustomAvatar({}) {
  const { t } = useTranslation();

  return (
    <Flex alignItems="center" gap="0.25rem">
      <Avatar src="/avatarImage.png" />
      <Text fontWeight="medium" fontSize="0.875rem">
        {t("customAvatarName")}
      </Text>
    </Flex>
  );
}
