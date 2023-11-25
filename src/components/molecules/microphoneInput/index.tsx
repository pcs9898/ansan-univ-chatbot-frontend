import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  IconButton,
  Text,
  keyframes,
  useColorMode,
} from "@chakra-ui/react";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import MicIcon from "@mui/icons-material/Mic";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  INPUT_METHOD_ENUM,
  inputMethodState,
  isInputButtonLoading,
  languageCodeState,
  messageTextState,
} from "@/src/commons/libraries/recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export default function MicrophoneInput() {
  const [recording, setRecording] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const { colorMode, toggleColorMode } = useColorMode();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [silenceTimeoutId, setSilenceTimeoutId] = useState(null);
  const { t } = useTranslation();
  const [messageText, setMessageText] = useRecoilState(messageTextState);
  const [isLoading, setIsLoading] = useRecoilState(isInputButtonLoading);
  const languageCode = useRecoilValue(languageCodeState);
  const [disableMicBtn, setDisableMicBtn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (recording && transcript.length === currentIndex) {
      if (silenceTimeoutId) clearTimeout(silenceTimeoutId);

      const timeoutId = setTimeout(() => {
        handleOnClickStopButton();
      }, 3000);

      setSilenceTimeoutId(timeoutId);
    } else if (recording && transcript.length > currentIndex) {
      if (silenceTimeoutId) clearTimeout(silenceTimeoutId);

      const timeoutId = setTimeout(() => {
        handleOnClickStopButton();
      }, 3000);

      setSilenceTimeoutId(timeoutId);

      const displayTimeoutId = setTimeout(() => {
        setDisplayText(transcript.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => {
        clearTimeout(displayTimeoutId);
      };
    }
  }, [transcript, currentIndex, recording]);

  useEffect(() => {
    return () => {
      SpeechRecognition.stopListening();
      setCurrentIndex(0);
      setDisplayText("");
      resetTranscript();
      setRecording(false);
    };
  }, []);

  // useEffect(() => {
  //   const resetAction = async () => {
  //     setDisableMicBtn(true);
  //     setRecording(false);

  //     await SpeechRecognition.stopListening();
  //     resetTranscript();
  //     if (silenceTimeoutId) clearTimeout(silenceTimeoutId);

  //     setCurrentIndex(0);
  //     setDisplayText("");
  //   };

  //   resetAction();
  //   setDisableMicBtn(false);
  // }, [languageCode]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doest support speech recognition.</span>;
  }

  const handleOnClickCancelButton = () => {
    setCurrentIndex(0);
    setDisplayText("");
    resetTranscript();
  };

  // send query text mutation
  const handleOnClickStopButton = async () => {
    setDisableMicBtn(true);
    setRecording(false);
    await SpeechRecognition.stopListening();
    resetTranscript();
    if (silenceTimeoutId) clearTimeout(silenceTimeoutId);

    if (transcript !== "") {
      setMessageText(transcript);
      setIsLoading(true);
    }
    setCurrentIndex(0);
    setDisplayText("");
    if (!isLoading) {
      setDisableMicBtn(false);
    }
  };

  const handleOnClickMicButton = async () => {
    await SpeechRecognition.startListening({
      continuous: true,
      language: router.locale,
    });
    setRecording(true);
  };

  return (
    <Flex
      w="100%"
      h="4.5rem"
      ml="0.5rem"
      bgColor={colorMode === "light" ? "cardBgColorLight" : "gray.700"}
      py="0.625rem"
      px="0.75rem"
      gap="0.75rem"
    >
      <Flex
        h="100%"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
        py="0.625rem"
        px="0.75rem"
        bgColor={colorMode === "light" ? "cardBgColorLight" : "null"}
        position="relative"
        pr="2rem"
      >
        {recording ? (
          <>
            {displayText}
            <Text as="span" animation={`${blink} 1s infinite`}>
              |
            </Text>
            {displayText !== "" && (
              <CloseButton
                color="red"
                size="lg"
                position="absolute"
                right="0.125rem"
                onClick={handleOnClickCancelButton}
              />
            )}
          </>
        ) : (
          <Text color="formatTimeColor">{t("msgInputText")}</Text>
        )}
      </Flex>
      <Flex h="100%" justifyContent="center" alignItems="center">
        {recording ? (
          <Center
            w="50px"
            h="50px"
            borderRadius="50%"
            onClick={handleOnClickStopButton}
            animation={`${pulse} 2s infinite`}
            cursor="pointer"
            bgColor="#D2D7F4"
          >
            <StopCircleIcon fontSize="large" style={{ fill: "#3857E3" }} />
          </Center>
        ) : (
          <IconButton
            aria-label="microphone icon"
            icon={<MicIcon fontSize="large" style={{ fill: "#3857E3" }} />}
            onClick={handleOnClickMicButton}
            size="lg"
            borderRadius="50px"
            bgColor="#D2D7F4"
            isDisabled={disableMicBtn}
          />
        )}
      </Flex>
    </Flex>
  );
}
