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
        {/* <!-- COMMON TAGS --> */}
        <title data-shuvi-head="true">{title}</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="bookmark" href="favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="keywords" content={title} data-shuvi-head="true" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} data-shuvi-head="true" />
        <meta property="og:url" content={websiteurl} data-shuvi-head="true" />
        <meta property="og:type" content="website" data-shuvi-head="true" />
        <meta property="og:title" content={title} data-shuvi-head="true" />
        <meta property="og:site_name" content="Xrex" data-shuvi-head="true" />
        <meta property="og:image" content={image} data-shuvi-head="true" />
        {/* Twitter */}
        <meta property="twitter:title" content={title} data-shuvi-head="true" />
        <meta property="twitter:site" content="Xrex" data-shuvi-head="true" />
        <meta property="twitter:image" content={image} data-shuvi-head="true" />
        <meta
          property="twitter:image:src"
          content={image}
          data-shuvi-head="true"
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
          data-shuvi-head="true"
        />
        <link rel="canonical" href={websiteurl} data-shuvi-head="true" />

        {/* Twitter */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        OG Research - og
      </main>
    </>
  );
}
