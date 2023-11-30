import { Image } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { memo } from "react";

interface ICustomAvatarProps {
  isBigAvatar?: boolean;
}

function CustomAvatar({ isBigAvatar }: ICustomAvatarProps) {
  const { t } = useTranslation();

  return (
    <Image
      alt="avatar image"
      src="/avatarImage.svg"
      style={
        isBigAvatar
          ? { width: "3.4rem", height: "3.4rem" }
          : { width: "2.5rem", height: "2.5rem" }
      }
    />
  );
}

export default memo(CustomAvatar);
