import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import chakraColorModeConfig from "@/commons/theme/config.theme";
import { customTheme } from "@/commons/theme/customTheme.theme";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const preferredLocale = Cookies.get("locale");

    if (!preferredLocale) {
      Cookies.set("locale", "ko");

      router.push(router.pathname, router.asPath, {
        locale: "ko",
      });
    } else {
      router.push(router.pathname, router.asPath, {
        locale: preferredLocale,
      });
    }
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript
          initialColorMode={chakraColorModeConfig.initialColorMode}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
