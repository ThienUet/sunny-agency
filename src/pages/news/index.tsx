import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const FacebookNewsPage = dynamic(
  () => import("@/main/FacebookNewsPage/FacebookNewsPage"),
  { ssr: false }
);

const FacebookNews = () => {
  return(
    <>
    <Head>
      <title>Sunny Agency | Reviews</title>
    </Head>
    <FacebookNewsPage />
  </>
  )
};

export default FacebookNews;