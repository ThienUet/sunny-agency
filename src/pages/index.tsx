import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import HomePage from "@/app/HomePage/HomePage";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunny Agency: Home</title>
      </Head>
      <HomePage />
    </>
  );
}
