import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const ReviewPage = dynamic(
  () => import("@/main/ReviewPage/ReviewPage"),
  { ssr: false }
);
export default function Reviews() {
  return (
    <>
      <Head>
        <title>Sunny Agency | Reviews</title>
      </Head>
      <ReviewPage />
    </>
  );
}
