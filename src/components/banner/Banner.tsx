import React from "react";
import styles from "@/styles/banner/banner.module.scss";
import { ImageInterface } from "@/interfaces/ImageInterface";
import ImageNew from "../CustomImage/ImageNew";
import Link from "next/link";

interface BannerProps {
  className?: string;
  image?: ImageInterface;
  title?: string;
  breadcrumbs: Array<string>;
}
export default function Banner(props: BannerProps): React.ReactNode {
  const { className, image, title, breadcrumbs } = props;

  return (
    <div className={`${styles.banner} ${className}`}>
      <ImageNew
        classNameParent={styles.banner_image}
        src={image?.src}
        fill
        alt={
          image?.alt ??
          "Sunny Agency Banner Rental Services, Sunny Agency Rental Services"
        }
      />
      <div className={styles.banner_content}>
        <h3 className={styles.banner_title}>{title ?? "Sunny Agency"}</h3>
        <div className={styles.routes}>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb, index) => {
              return (
                <h3 key={index} className={styles.route}>
                  {breadcrumb}
                </h3>
              );
            })}
        </div>
      </div>
    </div>
  );
}
