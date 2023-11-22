import "regenerator-runtime/runtime";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Show,
  Switch,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { DarkMode, LightMode } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRecoilState, useSetRecoilState } from "recoil";
import MicIcon from "@mui/icons-material/Mic";
import {
  INPUT_METHOD_ENUM,
  LANGUAGE_CODE_ENUM,
  inputMethodState,
  languageCodeState,
} from "@/src/commons/libraries/recoil/recoil";
import CustomAvatar from "../../molecules/customAvatar";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { useSpeechRecognition } from "react-speech-recognition";

const localeObg = {
  en: [
    <Flex key="en" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="US"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
      />
      <Text>English</Text>
    </Flex>,
    <Flex key="kr" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="KR"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
      />
      <Text>Korean</Text>
    </Flex>,
  ],
  ko: [
    <Flex key="en" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="KR"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
      />
      <Text>한국어</Text>
    </Flex>,
    <Flex key="kr" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="US"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
      />
      <Text>영어</Text>
    </Flex>,
  ],
};

function Header() {
  const router = useRouter();
  const { t } = useTranslation();
  const setLanguageCode = useSetRecoilState(languageCodeState);
  const [inputMethod, setInputMethod] = useRecoilState(inputMethodState);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [supportMic, setSupportMic] = useState(true);

  const currentLocale = router.locale;

  const changeLocale = (locale: string) => {
    Cookies.set("locale", locale);
    if (locale === "en") {
      setLanguageCode(LANGUAGE_CODE_ENUM.en);
    } else {
      setLanguageCode(LANGUAGE_CODE_ENUM.ko);
    }
    router.push(router.pathname, router.asPath, { locale });
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setSupportMic(false);
    }
  }, []);

  return (
    <Flex
      borderRadius="0px"
      h="5rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap="0.625rem">
        <CustomAvatar isBigAvatar={true} />
        <Flex flexDir="column">
          <Text
            fontWeight="extrabold"
            fontSize={{ base: "1.25rem", md: "1.5rem" }}
          >
            {t("headerChatbotName")}
          </Text>
          <Text
            color="cardBgColorDark"
            fontSize="0.875rem"
            as={Link}
            href="https://www.ansan.ac.kr/www/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("headerSubText") + " >"}
          </Text>
        </Flex>
      </Flex>

      <Flex>
        {supportMic && (
          <IconButton
            as={Button}
            aria-label="inputMethodButton"
            icon={
              inputMethod === INPUT_METHOD_ENUM.keyboard ? (
                <MicIcon />
              ) : (
                <KeyboardIcon />
              )
            }
            onClick={() =>
              setInputMethod((prev) =>
                prev === INPUT_METHOD_ENUM.keyboard
                  ? INPUT_METHOD_ENUM.microphone
                  : INPUT_METHOD_ENUM.keyboard
              )
            }
            variant="unstyled"
            display="flex"
            justifyContent="center"
          />
        )}

        <Show below="sm">
          <IconButton
            aria-label="more button"
            icon={<MoreVertIcon />}
            onClick={onOpen}
            variant="ghost"
          />
        </Show>
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay style={{ borderRadius: "0px" }} />
          <DrawerContent borderTopRadius="1.125rem" borderBottomRadius="0px">
            <DrawerCloseButton />
            <DrawerHeader style={{ borderRadius: "0px" }}>
              {t("settingsHeader")}
            </DrawerHeader>
            <DrawerBody>
              <VStack gap="0.5rem">
                {/* Dark mode */}
                <Flex w="100%" justifyContent="space-between">
                  <Flex fontWeight="semibold" alignItems="center">
                    {t("settingsDarkMode")}
                  </Flex>
                  <Switch
                    size="lg"
                    defaultChecked={colorMode === "dark" ? true : false}
                    onChange={toggleColorMode}
                    colorScheme="mainColorLight"
                    _checked={{ bg: "mainColorLight" }}
                  />
                </Flex>

                {/* language setting */}
                <Flex w="100%" justifyContent="space-between">
                  <Flex fontWeight="semibold" alignItems="center">
                    {t("settingsLanguage")}
                  </Flex>
                  <Tabs
                    variant="solid-rounded"
                    borderRadius="0px"
                    defaultIndex={router.locale === "ko" ? 0 : 1}
                  >
                    <TabList>
                      <Tab
                        _selected={{
                          bg: "mainColorLight",
                          color: "white",
                        }}
                        borderRadius="12px"
                        fontWeight="semibold"
                        onClick={() => changeLocale("ko")}
                      >
                        {t("settingsLanguageBtn1")}
                      </Tab>
                      <Tab
                        _selected={{
                          bg: "mainColorLight",
                          color: "white",
                        }}
                        borderRadius="12px"
                        fontWeight="semibold"
                        onClick={() => changeLocale("en")}
                      >
                        {t("settingsLanguageBtn2")}
                      </Tab>
                    </TabList>
                  </Tabs>
                </Flex>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Show above="sm">
          <IconButton
            as={Button}
            aria-label="colorModeButton"
            icon={colorMode === "light" ? <DarkMode /> : <LightMode />}
            onClick={toggleColorMode}
            variant="unstyled"
            display="flex"
            justifyContent="center"
          />
          <Menu matchWidth={true} placement="bottom-end">
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  isActive={isOpen}
                  rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  px="0.5rem"
                >
                  {localeObg[currentLocale][0]}
                </MenuButton>
                <MenuList
                  p="0.5rem"
                  style={{
                    position: "absolute",
                    right: 0,
                    transform: "translateX(100%)",
                    width: "20px",
                  }}
                  zIndex={5}
                >
                  <MenuOptionGroup
                    defaultValue={currentLocale}
                    type="radio"
                    w="50%"
                  >
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
        </Show>
      </Flex>
    </Flex>
  );
}

export default Header;
