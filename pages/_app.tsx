import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import nextI18NextConfig from "../next-i18next.config.js";
import { customTheme } from "@/src/commons/theme/customTheme.theme";
import { queryClient } from "@/src/commons/libraries/react-query/react-query";
import chakraColorModeConfig from "@/src/commons/theme/config.theme";
import Layouts from "@/src/components/layouts/index";
import Head from "next/head.js";

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
                content="initial-scale=0.9, width=device-width"
              />
            </Head>
            <Component {...pageProps} />
          </Layouts>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
