import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { DarkMode, LightMode } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

import { useRecoilState } from "recoil";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import {
  inputMethodEnum,
  inputMethodState,
} from "@/src/commons/libraries/recoil/recoil";

const localeObg = {
  en: ["🇺🇸 English", "🇰🇷 Korean"],
  ko: ["🇰🇷 한국어", "🇺🇸 영어"],
};

function Header() {
  const router = useRouter();
  const { t } = useTranslation();

  const [inputMethod, setInputMethod] = useRecoilState(inputMethodState);
  const { colorMode, toggleColorMode } = useColorMode();

  const currentLocale = router.locale;

  const changeLocale = (locale: string) => {
    Cookies.set("locale", locale);

    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Flex
      bgColor="blue.500"
      borderRadius="0px"
      // h={{ base: "3.5rem", md: "5rem" }}
      h="3.5rem"
      alignItems="center"
      justifyContent="space-between"
      pl="0.25rem"
      pr="0.125rem"
    >
      <Menu matchWidth={true}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              colorScheme="blue"
              color="white"
              variant="ghost"
              isActive={isOpen}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              px="0.5rem"
            >
              {localeObg[currentLocale][0]}
            </MenuButton>
            <MenuList maxW="150px">
              <MenuOptionGroup defaultValue={currentLocale} type="radio">
                <MenuItemOption value={currentLocale} fontWeight="semibold">
                  {localeObg[currentLocale][0]}
                </MenuItemOption>
                <MenuItemOption
                  value={currentLocale === "en" ? "ko" : "en"}
                  onClick={() =>
                    changeLocale(currentLocale === "en" ? "ko" : "en")
                  }
                  fontWeight="semibold"
                >
                  {localeObg[currentLocale][1]}
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>

      <Text
        color="white"
        fontWeight="bold"
        fontSize={{ base: "1.125rem", md: "1.5rem" }}
        position="absolute"
        left={["50%", null, null, null]} // Centering in mobile view
        transform={["translateX(-50%)", null, null, null]} // Centering in mobile view
        zIndex="1"
      >
        {t("headerChatbotName")}
      </Text>

      <Flex>
        <IconButton
          as={Button}
          aria-label="inputMethodButton"
          icon={
            inputMethod === inputMethodEnum.keyboard ? (
              <MicOutlinedIcon />
            ) : (
              <KeyboardAltOutlinedIcon />
            )
          }
          onClick={() =>
            setInputMethod((prev) =>
              prev === inputMethodEnum.keyboard
                ? inputMethodEnum.microphone
                : inputMethodEnum.keyboard
            )
          }
          color="white"
          variant="unstyled"
          display="flex"
          justifyContent="center"
        />
        <IconButton
          as={Button}
          aria-label="colorModeButton"
          icon={colorMode === "light" ? <DarkMode /> : <LightMode />}
          onClick={toggleColorMode}
          color="white"
          variant="unstyled"
          display="flex"
          justifyContent="center"
        />
      </Flex>
    </Flex>
  );
}

export default Header;
