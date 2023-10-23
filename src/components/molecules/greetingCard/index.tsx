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

export default function GreetingCard() {
  const { t } = useTranslation();

  //   const GreetingCardButtons = [
  //     "CalendarMonthOutlinedIcon",
  //     "DirectionsBusFilledOutlinedIcon",
  //     "MapOutlinedIcon",
  //     "RestaurantOutlinedIcon",
  //     "SchoolOutlinedIcon",
  //     "LocalPhoneOutlinedIcon",
  //     "LocalLibraryOutlinedIcon",
  //     "PaymentsOutlinedIcon",
  //     "ComputerOutlinedIcon",
  //   ];
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

  return (
    <>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gap="0.625rem"
        bgColor="blue.50"
        p="0.5rem"
        w={{ base: "65%", md: "50%" }}
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
            >
              <IconComponent />
              <Text
                fontSize="0.75rem"
                fontWeight="medium"
                h="100%"
                whiteSpace="normal"
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
