import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export default function FormatTime() {
  const { t } = useTranslation();
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period =
      hours >= 12 ? t("formatTimeAfternoon") : t("formatTimeMorning");
    const twelveHourTime = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

    setTimeString(
      `${period} ${twelveHourTime}:${minutes < 10 ? "0" + minutes : minutes}`
    );
  }, []);

  return (
    <Text
      fontSize="0.8rem"
      color="formatTimeColor"
      mt="0.125rem"
      fontWeight="medium"
    >
      {timeString}
    </Text>
  );
}
