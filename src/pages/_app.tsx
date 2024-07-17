import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import AntdThemeConfig from "@/config/AntDesignConfig";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SocialBar from "@/components/social-media/SocialBar";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <ConfigProvider theme={AntdThemeConfig}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="main">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <SocialBar />
      </div>
    </ConfigProvider>
  );
}
