import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./globalStyles.theme";
import chakraColorModeConfig from "./config.theme";

export const customTheme = extendTheme({
  styles: globalStyles,
  config: chakraColorModeConfig,
});
