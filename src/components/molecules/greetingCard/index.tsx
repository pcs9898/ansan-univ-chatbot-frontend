import { Button, Card, Flex, Grid, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useSetRecoilState } from "recoil";
import {
  eventNameState,
  messageTextState,
} from "@/src/commons/libraries/recoil/recoil";
import { useRouter } from "next/router";

const GreetingCardButtonIcons = [
  "📆",
  "🚌",
  "🗺️",
  "🍴",
  "🎓",
  "📞",
  "📚",
  "💰",
  "💻",
];

const GreetingCardEventNameForDialogFlow = [
  "academic-calendar",
  "shuttle-bus",
  "campus-map",
  "diet",
  "scholarship-schedule",
  "campus-contact-information",
  "library",
  "tuition",
  "enrolment",
];

const GreetingCardClickedMyMessageKO = [
  "⏰ 학사일정",
  "🚌 셔틀버스",
  "🗺️ 캠퍼스맵",
  "🍴 식단",
  "🎓 장학일정",
  "📞 교내연락처",
  "📚 도서관",
  "💰 등록금",
  "💻 수강신청",
];

const GreetingCardClickedMyMessageEN = [
  "⏰ Academic Calendar",
  "🚌 Shuttle Bus",
  "🗺️ Campus Map",
  "🍴 Meal Menu",
  "🎓 Scholarship Schedule",
  "📞 School Contact Information",
  "📚 Library Usage",
  "💰 Tuition Fee",
  "💻 Course Registration",
];

export default function GreetingCard() {
  const { t } = useTranslation();
  const router = useRouter();
  const setEventName = useSetRecoilState(eventNameState);
  const setMessageText = useSetRecoilState(messageTextState);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleOnClick = (i: number) => {
    if (router.locale === "ko") {
      setMessageText(GreetingCardClickedMyMessageKO[i]);
    } else {
      setMessageText(GreetingCardClickedMyMessageEN[i]);
    }

    setEventName(GreetingCardEventNameForDialogFlow[i]);
  };

  return (
    <>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gap="0.5rem"
        bgColor={colorMode === "light" ? "cardBgColorLight" : "cardBgColorDark"}
        py="0.625rem"
        px="0.75rem"
        maxW="40rem"
        w={{ base: "85%", md: "40rem" }}
      >
        {GreetingCardButtonIcons.map((iconName, i) => {
          // const IconComponent = iconName;
          return (
            <Button
              key={i}
              display="flex"
              flexDir="column"
              bgColor="white"
              w="100%"
              p="0.5rem"
              gap="0.5rem"
              h="100%"
              onClick={() => handleOnClick(i)}
              _focus={{ color: "black" }}
              borderRadius="1rem"
            >
              <Flex justifyContent="center" alignItems="center">
                {iconName}
              </Flex>
              <Text
                fontSize={{ base: "0.75rem", sm: "0.875rem" }}
                fontWeight="medium"
                h="100%"
                whiteSpace="normal"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="mainColorLight"
              >
                {t(`greetingCardMenu${i + 1}`)}
              </Text>
            </Button>
          );
        })}
      </Grid>
    </>
  );
}
