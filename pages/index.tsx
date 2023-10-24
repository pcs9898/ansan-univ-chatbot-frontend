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
import GreetingMsg from "@/components/molecules/greetingMessage";

import MyMessage from "@/components/molecules/myMessage";
import MsgInput from "@/components/molecules/messageInput";
import LoadingMessage from "@/components/molecules/loadingMessage";
import FailMessage from "@/components/molecules/failMessage";
import Cards from "@/components/organisms/customCards";
import Fail from "@/components/organisms/greetingOrFail";
import GreetingOrFail from "@/components/organisms/greetingOrFail";
import Header from "@/components/organisms/header";
import MyMessageWithFormat from "@/components/organisms/myMessageWithFormat";

export const getStaticProps = withTranslations();

const testData = [
  {
    texts: [
      "도서관에 오신 것을 환영합니다!",
      "",
      "도서관에 대한 궁금증이 있다면 언제든지 찾아주세요.",
      "",
      "📞전화번호:031-400-7073",
      "📌위치:라키비움관(도서관)",
    ],
    buttons: [
      {
        buttonText: "라키비움관(도서관) 홈페이지",
        link: "https://lib.ansan.ac.kr/",
      },
      {
        buttonText: "라키비움관(도서관) 시설",
        link: "https://lib.ansan.ac.kr/local/html/facility",
      },
      {
        link: "https://www.ansan.ac.kr/www/content/106",
        buttonText: "라키비움관(도서관) 찾아오시는길",
      },
    ],
  },
  {
    texts: ["(1/2)"],
    buttons: [
      {
        buttonText: "자료대출기준",
        postBack: "자료대출기준",
      },
      {
        buttonText: "자료반납",
        postBack: "자료반납",
      },
      {
        buttonText: "자료예약",
        postBack: "자료예약",
      },
    ],
  },
  {
    texts: ["(2/2)"],
    buttons: [
      {
        buttonText: "도서관 개관시간",
        postBack: "도서관 개관시간",
      },
      {
        buttonText: "도서관 시설안내",
        postBack: "도서관 시설안내",
      },
      {
        postBack: "도서관 연락처",
        buttonText: "도서관 연락처",
      },
    ],
  },
  {
    texts: ["(2/2)"],
    buttons: [
      {
        buttonText: "도서관 개관시간",
        postBack: "도서관 개관시간",
      },
      {
        buttonText: "도서관 시설안내",
        postBack: "도서관 시설안내",
      },
      {
        postBack: "도서관 연락처",
        buttonText: "도서관 연락처",
      },
    ],
  },
];

const testData2 = {
  buttons: [
    {
      buttonText: "도서관 개관시간",
      postBack: "도서관 개관시간",
    },
    {
      buttonText: "도서관 시설안내",
      postBack: "도서관 시설안내",
    },
    {
      postBack: "도서관 연락처",
      buttonText: "도서관 연락처",
    },
  ],
  texts: ["(2/2)"],
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

      {/* <Cards cardsProps={testData} /> */}
      <GreetingOrFail greetingOrFailOption="greeting" />
      <MyMessageWithFormat text="학사일정 알려주세요" />
    </>
  );
}
