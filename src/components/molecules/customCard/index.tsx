import {
  eventNameState,
  languageCodeState,
  messageTextState,
} from "@/src/commons/libraries/recoil/recoil";
import { openPageInNewTab } from "@/src/commons/utils/openPageInNewTab";
import { Box, Button, Card, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface ICustomCardProps {
  customCardProps: {
    texts: string[];
    buttons?: {
      buttonText: string;
      link?: string;
      postBack?: string;
    }[];
  };
}

interface IHandleOnClick {
  postback: string;
  buttonText: string;
}

export default function CustomCard({ customCardProps }: ICustomCardProps) {
  const { texts, buttons } = customCardProps;
  const setEventName = useSetRecoilState(eventNameState);
  const setMessageText = useSetRecoilState(messageTextState);
  const { colorMode, toggleColorMode } = useColorMode();
  const [languageCode, setLanguageCode] = useRecoilState(languageCodeState);
  // const [isSmallScreen] = useMediaQuery("(max-width: 30em)");

  const handleOnClick = ({ postback, buttonText }: IHandleOnClick) => {
    setMessageText(buttonText);
    setEventName(postback);
  };

  return (
    <Card
      py="0.625rem"
      px="0.75rem"
      variant="unstyled"
      gap="0.625rem"
      bgColor={colorMode === "light" ? "cardBgColorLight" : "gray.700"}
      minW={{ base: "85%", sm: "21.25rem" }}
      w={{ base: "85%", sm: "21.25rem" }}
      maxW={{ base: "85%", sm: "21.25rem" }}
      sx={{ scrollSnapAlign: "start" }}
    >
      <Box whiteSpace="normal">
        {texts.map((text, i) => {
          if (text === " ") {
            return (
              <Text key={i} whiteSpace="normal">
                &nbsp;
              </Text>
            );
          }
          return (
            <Text
              key={i}
              fontSize="1rem"
              fontWeight="medium"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              {text}
            </Text>
          );
        })}
      </Box>
      {buttons.length >= 1 && (
        <Flex w="100%" gap="0.375rem" flexDir="column">
          {buttons?.map((button, i) => {
            return button.link ? (
              <Button
                key={i}
                fontSize="1rem"
                bgColor={
                  colorMode === "light" ? "white" : "sendMsgBtnBgColorLight"
                }
                color={colorMode === "light" ? "mainColorLight" : "black"}
                onClick={() => button.link && openPageInNewTab(button.link)}
                _hover={{
                  base: "",
                  sm: {
                    bg:
                      colorMode === "light"
                        ? "btnAboveSmBgColorLight"
                        : "btnAboveSmBgColorDark",
                  },
                }}
              >
                <Text whiteSpace="normal">{button.buttonText}</Text>
              </Button>
            ) : (
              <Button
                key={i}
                fontSize="1rem"
                bgColor={
                  colorMode === "light" ? "white" : "sendMsgBtnBgColorLight"
                }
                color={colorMode === "light" ? "mainColorLight" : "black"}
                onClick={() =>
                  handleOnClick({
                    postback: button.postBack,
                    buttonText: button.buttonText,
                  })
                }
                _hover={{
                  base: "",
                  sm: {
                    bg:
                      colorMode === "light"
                        ? "btnAboveSmBgColorLight"
                        : "btnAboveSmBgColorDark",
                  },
                }}
              >
                <Text whiteSpace="normal">{button.buttonText}</Text>
              </Button>
            );
          })}
        </Flex>
      )}
    </Card>
  );
}
