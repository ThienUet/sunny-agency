import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import AntdThemeConfig from "@/config/AntDesignConfig";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SocialBar from "@/components/social-media/SocialBar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={AntdThemeConfig}>
      <div className="main">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <SocialBar />
      </div>
    </ConfigProvider>
  );
}
