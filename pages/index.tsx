import { withTranslations } from "@/commons/utils/withTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import CustomAvatar from "@/components/molecules/customAvatar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CustomCard from "@/components/molecules/customCard";
import FormatTime from "@/components/molecules/formatTime";
import GreetingCard from "@/components/molecules/greetingCard";
import GreetingImage from "@/components/molecules/greetingImage";
import GreetingMsg from "@/components/molecules/greetingMsg";

import MyMessage from "@/components/molecules/myMessage";
import MsgInput from "@/components/molecules/msgInput";
import LoadingMessage from "@/components/molecules/loadingMessage";

export const getStaticProps = withTranslations();

const testData = {
  texts: [
    "학사일정이 궁금하신가요?📆",
    "학사일정 페이지에서 등록, 수강, 시험, 휴복학, 졸업 등 연간 학사 일정을 확인할 수 있어요.",
    "",
    "등록금 납부 일정 및 방법이 궁금하신가요?",
    "👇아래 버튼을 눌러 학부 등록금 납부 일정 및 납부 방법에 관한 더 자세한 내용을 확인해보세요.",
  ],
  buttons: [
    {
      buttonText: "등록금 납부 안내",
      link: "https://www.ansan.ac.kr/www/boardview/11/3488",
    },
    {
      buttonText: "등록금 납부 안내",
      postBack: "regi",
    },
  ],
};

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
      <CustomAvatar />
      <CustomCard customCardProps={testData} />
      <FormatTime />

      <GreetingCard />
      <GreetingImage />
      <GreetingMsg />
      <MyMessage text="학사일정 알려주세요" />
      <MsgInput isButtonLoading={true} />
      <LoadingMessage />
    </>
  );
}
