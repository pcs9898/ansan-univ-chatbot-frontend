import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import chakraColorModeConfig from "@/commons/theme/config.theme";
import { customTheme } from "@/commons/theme/customTheme.theme";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { queryClient } from "@/commons/libraries/react-query/react-query";
import Layouts from "@/components/layouts";
import { RecoilRoot } from "recoil";
import nextI18NextConfig from "../next-i18next.config.js";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const preferredLocale = Cookies.get("locale");

    if (preferredLocale) {
      router.push(router.pathname, router.asPath, {
        locale: preferredLocale,
      });
    }
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ColorModeScript
            initialColorMode={chakraColorModeConfig.initialColorMode}
          />
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
