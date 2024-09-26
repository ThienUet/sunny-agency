import React from "react";
import styles from "@/styles/banner/banner.module.scss";
import { ImageInterface } from "@/interfaces/ImageInterface";

interface BannerProps {
  image?: ImageInterface;
  title?: string;
}
export default function Banner(): React.ReactNode {
  return <div className={styles.banner}></div>;
}
