import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./globalStyles.theme";
import chakraColorModeConfig from "./config.theme";
import { cardTheme } from "./components/card.theme";

export const customTheme = extendTheme({
  styles: globalStyles,
  config: chakraColorModeConfig,
  components: {
    Card: cardTheme,
  },
});
