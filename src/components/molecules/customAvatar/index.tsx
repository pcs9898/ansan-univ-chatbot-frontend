import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { memo } from "react";

interface ICustomAvatarProps {
  isBigAvatar?: boolean;
}

function CustomAvatar({ isBigAvatar }: ICustomAvatarProps) {
  const size = isBigAvatar ? 54 : 40;

  return (
    <Flex alignItems="flex-start">
      <Image
        alt="avatar image"
        src="/avatarImage.svg"
        width={size}
        height={size}
        style={{ borderRadius: isBigAvatar ? "16px" : "12px" }}
      />
    </Flex>
  );
}

export default memo(CustomAvatar);
