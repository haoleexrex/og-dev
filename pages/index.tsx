import { GetServerSideProps } from "next";
import parser from "accept-language-parser";
import Head from "next/head";

const websiteurl = "https://ogdev-pearl.vercel.app/";

const en = {
  title: "Sign up with this code to get trading fee discount | XREX Exchange",
  description:
    "XREX exchange is operated by an internationally-recognized security team with",
  image: `${websiteurl}discount0.png`,
};

const zh = {
  title: "XREX 好友推薦，立享交易折扣｜XREX 交易所",
  description:
    "XREX 交易所是由擁有 15 年以上經驗的資安團隊營運，提供最安全、最乾淨也最合規的加密貨幣交易體驗",
  image: `${websiteurl}discount0zh_TW.png`,
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
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
  } catch (err) {
    return {
      props: {
        title: en.title,
        description: en.description,
        image: en.image,
      },
    };
  }
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
        <title>XREX 好友推薦，立享 20% 交易折扣｜XREX 交易所</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="bookmark" href="favicon.ico" />
        <meta
          name="description"
          content="XREX 交易所是由擁有 15 年以上經驗的資安團隊營運，提供最安全、最乾淨也最合規的加密貨幣交易體驗，美金存提款支援 120+ 個國家。現在就創建推薦碼邀請好友加入 XREX，分享交易手續費折扣！加入 XREX 俱樂部可以省更多交易手續費，揪好友一同加入 XREX 吧！"
        />
        <meta
          name="image"
          content="/discount0.png"
        />
        <meta content="XREX 好友推薦，立享 20% 交易折扣｜XREX 交易所" />
        <meta content="XREX 交易所是由擁有 15 年以上經驗的資安團隊營運，提供最安全、最乾淨也最合規的加密貨幣交易體驗，美金存提款支援 120+ 個國家。現在就創建推薦碼邀請好友加入 XREX，分享交易手續費折扣！加入 XREX 俱樂部可以省更多交易手續費，揪好友一同加入 XREX 吧！" />
        <meta content="/discount0.png" />
        <meta
          property="twitter:title"
          content="XREX 好友推薦，立享 20% 交易折扣｜XREX 交易所"
        />
        <meta property="twitter:site" content="Xrex" />
        <meta
          property="twitter:image"
          content="/discount0.png"
        />
        <meta
          property="twitter:image:src"
          content="/discount0.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://exchange.xrex.io" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="XREX 好友推薦，立享 20% 交易折扣｜XREX 交易所"
        />
        <meta property="og:site_name" content="Xrex" />
        <meta
          property="og:image"
          content="/discount0.png"
        />
        <meta property="og:locale" content="zh_TW" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="version" />
        <meta name="next-head-count" content="24" />
        <meta name="keywords" content="XREX, Exchange, bitcoin, BTC, USDT" />
        <meta name="theme-color" content="#1976d2" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        OG Research - og
      </main>
    </>
  );
}
