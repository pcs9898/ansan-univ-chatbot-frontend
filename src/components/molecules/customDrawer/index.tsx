import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Switch,
  Tab,
  TabList,
  Tabs,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface ICustomDrawerProps {
  onClose: () => void;
  isOpen: boolean;
  changeLocale: (locale: string) => void;
}

export default function CustomDrawer({
  onClose,
  isOpen,
  changeLocale,
}: ICustomDrawerProps) {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
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
                variant={{ base: "unstyled", sm: "solid" }}
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
  );
}
