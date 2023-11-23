import Head from "next/head";
import { useTranslation } from "next-i18next";
import { withTranslations } from "@/src/commons/utils/withTranslations";
import HomeContainer from "@/src/components/pages/home/home.container";

export const getStaticProps = withTranslations();

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
        <meta property="og:title" content="안산대학교 챗봇" />
        <meta
          property="og:description"
          content="안녕하세요, 안산대학교 챗봇이에요😊"
        />
        <meta property="og:image" content="/public/ogImage.png" />
      </Head>

      <HomeContainer />
    </>
  );
}
