import {
  Button,
  Card,
  Flex,
  Grid,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
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
  const [isSmallScreen] = useMediaQuery("(max-width: 30em)"); // sm: 30em

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
        bgColor={colorMode === "light" ? "cardBgColorLight" : "gray.700"}
        py="0.625rem"
        px="0.75rem"
        w={{ base: "85%" }}
      >
        {GreetingCardButtonIcons.map((iconName, i) => {
          return (
            <Button
              key={i}
              display="flex"
              flexDir="column"
              variant={{ base: "solid", sm: "solid" }}
              bgColor={{
                base:
                  colorMode === "light" ? "white" : "sendMsgBtnBgColorLight",
                sm: colorMode === "light" ? "white" : "sendMsgBtnBgColorLight",
              }}
              w="100%"
              p="0.5rem"
              gap="0.5rem"
              h="100%"
              onClick={() => handleOnClick(i)}
              _focus={{ color: "black" }}
              borderRadius="1rem"
              _hover={isSmallScreen ? {} : { bg: "black" }}
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
                color={colorMode === "light" ? "mainColorLight" : "black"}
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
