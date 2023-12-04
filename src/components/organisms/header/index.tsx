import "regenerator-runtime/runtime";
import {
  INPUT_METHOD_ENUM,
  LANGUAGE_CODE_ENUM,
  inputMethodState,
  languageCodeState,
} from "@/src/commons/libraries/recoil/recoil";
import {
  Button,
  Flex,
  IconButton,
  Show,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { DarkMode, LightMode } from "@mui/icons-material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Cookies from "js-cookie";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { useRecoilState, useSetRecoilState } from "recoil";
import CustomAvatar from "../../molecules/customAvatar";

const CustomMenu = dynamic(() => import("../../molecules/customMenu"));
const CustomDrawer = dynamic(() => import("../../molecules/customDrawer"));

function Header() {
  const router = useRouter();
  const { t } = useTranslation();
  const setLanguageCode = useSetRecoilState(languageCodeState);
  const [inputMethod, setInputMethod] = useRecoilState(inputMethodState);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [supportMic, setSupportMic] = useState(true);
  const [micAccess, setMicAccess] = useState(false);

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

    if (typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          setMicAccess(true);
          stream.getTracks().forEach((track) => track.stop()); // 마이크 스트림을 종료
        })
        .catch((err) => {
          setMicAccess(false);
        });
    }
  }, [browserSupportsSpeechRecognition]);

  return (
    <Flex
      id="header"
      borderRadius="0px"
      h="5rem"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      zIndex={10}
      bgColor={colorMode === "light" ? "white" : "gray.800"}
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
        {supportMic && micAccess && (
          <IconButton
            as={Button}
            aria-label="inputMethodButton"
            variant="unstyled"
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
            display="flex"
            justifyContent="center"
          />
        )}

        <Show below="33.95rem">
          <IconButton
            variant={{ base: "unstyled", sm: "ghost" }}
            aria-label="more button"
            icon={<MoreVertIcon />}
            onClick={onOpen}
          />
        </Show>

        <CustomDrawer
          onClose={onClose}
          isOpen={isOpen}
          changeLocale={changeLocale}
        />

        <Show above="34rem">
          <IconButton
            as={Button}
            aria-label="colorModeButton"
            icon={colorMode === "light" ? <DarkMode /> : <LightMode />}
            onClick={toggleColorMode}
            variant="unstyled"
            display="flex"
            justifyContent="center"
          />
          <CustomMenu changeLocale={changeLocale} />
        </Show>
      </Flex>
    </Flex>
  );
}

export default Header;
