import { withTranslations } from "@/commons/utils/withTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export const getStaticProps = withTranslations();

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
        <meta property="og:title" content="안산대학교 안이(An-e)" />
        <meta
          property="og:description"
          content="안녕하세요, 안산대학교 챗봇 안이(An-e)예요😊"
        />
        <meta property="og:image" content="/public/ogImage.png" />
      </Head>
      hi
    </>
  );
}
