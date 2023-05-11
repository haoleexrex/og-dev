import { GetServerSideProps } from "next";
import parser from "accept-language-parser";
import Head from "next/head";

const en = {
  title: "Sign up with this code to get trading fee discount | XREX Exchange",
  description:
    "XREX exchange is operated by an internationally-recognized security team with 15+ years of experience. We provide the safest, cleanest and the most compliant trading environment. We offer smooth USD deposits and withdrawals in 120+ countries. Sign up with a referral code to get trading fee discount now!",
  image: "https://shiabibi.vercel.app/discount0.png",
};

const zh = {
  title: "XREX 好友推薦，立享交易折扣｜XREX 交易所",
  description:
    "XREX 交易所是由擁有 15 年以上經驗的資安團隊營運，提供最安全、最乾淨也最合規的加密貨幣交易體驗，美金存提款支援 120+ 個國家。現在就創建推薦碼邀請好友加入 XREX，分享交易手續費折扣！加入 XREX 俱樂部可以省更多交易手續費，揪好友一同加入 XREX 吧！",
  image: "https://shiabibi.vercel.app/discount0zh_TW.png",
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context;
  const acceptLanguageHeader = req.headers["accept-language"] as string;
  const afterParser = parser.parse(acceptLanguageHeader);
  console.log("afterParser", afterParser[0]);
  const lang = afterParser[0];
  let langObject = en;

  if (lang.code.includes("zh")) {
    langObject = zh;
  }

  return {
    props: {
      title: langObject.title,
      description: langObject.description,
      image: langObject.image,
    },
  };
};

interface Props {
  title?: string;
  description?: string;
  image?: string;
  robots?: string;
  locale?: string;
  url?: string;
}

export default function Home({
  title,
  description,
  image,
  robots,
  locale,
  url,
}: Props) {
  return (
    <>
      <Head>
        {/* <!-- COMMON TAGS --> */}
        {/* <title key="title">{title}</title> */}
        <title data-shuvi-head="true">{title}</title>
        <meta name="keywords" content={description} data-shuvi-head="true" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="bookmark" href="favicon.ico" />

        {/* <!-- Search Engine --> */}
        {/* <meta key="description" name="description" content={description} /> */}
        <meta name="description" content={description} data-shuvi-head="true" />
        <meta name="image" content={image} />
        {/*  */}
        <meta property="og:url" content={url} data-shuvi-head="true" />
        <meta property="og:type" content="website" data-shuvi-head="true" />
        <meta property="og:site_name" content={title} data-shuvi-head="true" />
        <meta property="og:image" content={image} data-shuvi-head="true" />
        {/* Twitter */}
        <meta property="twitter:title" content={title} data-shuvi-head="true" />
        <meta property="twitter:site" content={title} data-shuvi-head="true" />
        <meta property="twitter:image" content={image} data-shuvi-head="true" />
        <meta
          property="twitter:image:src"
          content={image}
          data-shuvi-head="true"
        />
        {/* card */}
        <meta property="twitter:card" content={image} data-shuvi-head="true" />
        <link
          rel="canonical"
          href="https://shiabibi.vercel.app/og"
          data-shuvi-head="true"
        />

        {/* <!-- Schema.org for Google --> */}
        {/* <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} /> */}

        {/* <!-- Twitter --> */}
        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={image} /> */}

        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        {/* <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content={locale} /> */}

        <meta key="robots" name="robots" content={"index,follow"} />
        <meta key="googlebot" name="googlebot" content={"index,follow"}></meta>

        <meta
          name="version"
          content={process.env.NEXT_PUBLIC_APP_VERSION as string}
        ></meta>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        OG Research - og
      </main>
    </>
  );
}
