import {
  extendTheme,
  theme as defaultTheme,
  StyleFunctionProps,
} from "@chakra-ui/react";
import { globalStyles } from "./globalStyles.theme";
import chakraColorModeConfig from "./config.theme";
import { cardTheme } from "./components/card.theme";
import { customColors } from "./colors.theme";

export const customTheme = extendTheme({
  styles: globalStyles,
  config: chakraColorModeConfig,
  colors: customColors,
  components: {
    Card: cardTheme,
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          "@media(hover: none)": {
            _hover: {
              bg: defaultTheme.components.Button.variants.solid(props).bg,
            },
          },
        }),
      },
    },
  },
});
