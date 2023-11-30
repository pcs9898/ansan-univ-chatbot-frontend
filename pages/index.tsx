import { withTranslations } from "@/src/commons/utils/withTranslations";
import HomeContainer from "@/src/components/pages/home/home.container";
import { useTranslation } from "next-i18next";
import Head from "next/head";

export const getStaticProps = withTranslations();

export default function Home(props: any) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
        <meta property="og:title" content={t("headerChatbotName")} />
        <meta property="og:description" content={t("greetingMsg1")} />
        <meta
          property="og:image"
          content={
            process.env.NEXT_PUBLIC_GOOGLE_STORAGE_IMAGE_URL +
            "/avatarImage.jpg"
          }
        />
        <meta name="keyword" content={t("headerChatbotName")} />
        <meta name="description" content={t("headerChatbotName")} />
      </Head>

      <HomeContainer />
    </>
  );
}
