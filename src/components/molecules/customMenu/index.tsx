import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const localeObg = {
  en: [
    <Flex key="en" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="US"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
        alt="flag"
      />
      <Text>English</Text>
    </Flex>,
    <Flex key="kr" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="KR"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
        alt="flag"
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
        alt="flag"
      />
      <Text>한국어</Text>
    </Flex>,
    <Flex key="kr" gap="0.25rem" alignItems="center">
      <ReactCountryFlag
        countryCode="US"
        svg
        className="emojiFlag"
        style={{ borderRadius: "0px", marginRight: "0.25rem" }}
        alt="flag"
      />
      <Text>영어</Text>
    </Flex>,
  ],
};

interface ICustomMenuProps {
  changeLocale: (locale: string) => void;
}

export default function CustomMenu({ changeLocale }: ICustomMenuProps) {
  const { locale: currentLocale } = useRouter();

  return (
    <Menu matchWidth={true} placement="bottom-end">
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            variant={{ base: "unstyled", sm: "ghost" }}
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
          >
            <MenuOptionGroup defaultValue={currentLocale} type="radio" w="50%">
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
  );
}
