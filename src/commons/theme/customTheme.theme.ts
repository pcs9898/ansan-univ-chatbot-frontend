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

        // 다른 버튼 variant에 대해 위와 같은 방식으로 적용
        outline: (props: StyleFunctionProps) => ({
          "@media(hover: none)": {
            _hover: {
              bg: defaultTheme.components.Button.variants.outline(props).bg,
            },
          },
        }),

        ghost: (props: StyleFunctionProps) => ({
          "@media(hover: none)": {
            _hover: {
              bg: defaultTheme.components.Button.variants.ghost(props).bg,
            },
          },
        }),

        // 추가로 필요한 버튼 variant에 대해 동일하게 적용
      },
    },
  },
});
