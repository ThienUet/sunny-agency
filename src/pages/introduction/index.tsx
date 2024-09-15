import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const IntroductionPage = dynamic(
  () => import("@/main/IntroductionPage/Introduction"),
  { ssr: false }
);
export default function Introduction(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Sunny Agency | Introduction</title>
      </Head>
      <IntroductionPage />
    </>
  );
}
