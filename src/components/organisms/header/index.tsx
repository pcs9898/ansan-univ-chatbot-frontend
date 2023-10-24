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
import { inputMethodState } from "@/commons/libraries/recoil/recoil";
import { useRecoilState } from "recoil";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

interface ILocaleObject {
  [key: string]: string[];
}

const localeObg: ILocaleObject = {
  en: ["🇺🇸 English", "🇰🇷 Korean"],
  ko: ["🇰🇷 한국어", "🇺🇸 영어"],
};

function Header() {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState("");
  const [inputMethod, setInputMethod] = useRecoilState(inputMethodState);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const currentLocaleFromCookies: string = Cookies.get("locale") ?? "";
    setCurrentLocale(currentLocaleFromCookies);
  }, []);

  const changeLocale = (locale: string) => {
    Cookies.set("locale", locale);
    setCurrentLocale(locale);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Flex
      bgColor="blue.500"
      borderRadius="0px"
      h={{ base: "3.5rem", md: "5rem" }}
      alignItems="center"
      justifyContent="space-between"
      px="0.5em"
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
              {localeObg[currentLocale]?.[0]}
            </MenuButton>
            <MenuList maxW="150px">
              <MenuOptionGroup defaultValue={currentLocale} type="radio">
                <MenuItemOption value={currentLocale} fontWeight="semibold">
                  {localeObg[currentLocale]?.[0]}
                </MenuItemOption>
                <MenuItemOption
                  value={currentLocale === "en" ? "ko" : "en"}
                  onClick={() =>
                    changeLocale(currentLocale === "en" ? "ko" : "en")
                  }
                  fontWeight="semibold"
                >
                  {localeObg[currentLocale]?.[1]}
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
            inputMethod === "keyboard" ? (
              <MicOutlinedIcon />
            ) : (
              <KeyboardAltOutlinedIcon />
            )
          }
          onClick={() =>
            setInputMethod((prev) =>
              prev === "keyboard" ? "microphone" : "keyboard"
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
