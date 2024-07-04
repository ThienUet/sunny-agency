import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import HomePage from "@/app/HomePage/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage />;
}
