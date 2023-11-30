import { queryClient } from "@/src/commons/libraries/react-query/react-query";
import chakraColorModeConfig from "@/src/commons/theme/config.theme";
import { customTheme } from "@/src/commons/theme/customTheme.theme";
import Layouts from "@/src/components/layouts/index";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import nextI18NextConfig from "../next-i18next.config.js";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    const preferredLocale = Cookies.get("locale");
    if (preferredLocale) {
      router.push(router.pathname, router.asPath, {
        locale: preferredLocale,
      });
    } else {
      Cookies.set("locale", locale);
    }

    if ("ontouchstart" in window) {
      let styleNode = document.createElement("style");
      styleNode.innerHTML = `* { pointer-events: auto !important; }`;
      document.body.appendChild(styleNode);
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
            <Head>
              <meta
                name="viewport"
                content="initial-scale=0.95, width=device-width"
              />
            </Head>
            <Global
              styles={css`
                @media (hover: none) {
                  * {
                    _hover: none !important;
                  }
                }
              `}
            />
            <Component {...pageProps} />
          </Layouts>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
