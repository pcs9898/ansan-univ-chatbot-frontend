import { Button, Card, Flex, Grid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import { useSetRecoilState } from "recoil";
import {
  eventNameState,
  messageTextState,
} from "@/src/commons/libraries/recoil/recoil";

const GreetingCardButtonIcons = [
  CalendarMonthOutlinedIcon,
  DirectionsBusFilledOutlinedIcon,
  MapOutlinedIcon,
  RestaurantOutlinedIcon,
  SchoolOutlinedIcon,
  LocalPhoneOutlinedIcon,
  LocalLibraryOutlinedIcon,
  PaymentsOutlinedIcon,
  ComputerOutlinedIcon,
];

const GreetingCardEventNameForDialogFlow = [
  "academic-calendar",
  "shuttlebus",
  "campus-map",
  "meal_menu",
  "scholarship-schedule",
  "school-contacts-ko",
  "library",
  "tuition",
  "enrolment",
];

const GreetingCardClickedMyMessage = [
  "학사일정 알려주세요.",
  "셔틀버스 이용에 대해 안내해주세요.",
  "안산대학교 캠퍼스맵 보여주세요.",
  "식당 메뉴 알려주세요.",
  "장학금 일정에 대해 알려주세요.",
  "본교 대표 전화번호 알려주세요.",
  "중앙도서관 이용정보를 알고 싶어요",
  "등록금에 대해 알려주세요.",
  "수강 신청하고 싶어요.",
];

export default function GreetingCard() {
  const { t } = useTranslation();
  const setEventName = useSetRecoilState(eventNameState);
  const setMessageText = useSetRecoilState(messageTextState);

  const handleOnClick = (i: number) => {
    setMessageText(GreetingCardClickedMyMessage[i]);
    setEventName(GreetingCardEventNameForDialogFlow[i]);
  };

  return (
    <>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gap="0.625rem"
        bgColor="blue.50"
        p="0.5rem"
        // w={{ base: "75%", md: "50%" }}
        w="100%"
      >
        {GreetingCardButtonIcons.map((iconName, i) => {
          const IconComponent = iconName;
          return (
            <Button
              key={i}
              display="flex"
              flexDir="column"
              bgColor="white"
              color="black"
              w="100%"
              p="0.5rem"
              gap="0.5rem"
              h="100%"
              onClick={() => handleOnClick(i)}
              _focus={{ bgColor: "white" }}
            >
              <Flex justifyContent="center" alignItems="center">
                <IconComponent />
              </Flex>
              <Text
                fontSize="0.75rem"
                fontWeight="medium"
                h="100%"
                whiteSpace="normal"
                display="flex"
                justifyContent="center"
                alignItems="center"
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
