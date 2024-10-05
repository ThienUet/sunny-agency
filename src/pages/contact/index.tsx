import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const ContactPage = dynamic(
  () => import("@/main/ContactPage/ContactPage"),
  { ssr: false }
);

const Contact = () => {
  return(
    <>
    <Head>
      <title>Sunny Agency | Contact</title>
    </Head>
    <ContactPage />
  </>
  )
};

export default Contact;