import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import AntdThemeConfig from "@/config/AntDesignConfig";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={AntdThemeConfig}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
