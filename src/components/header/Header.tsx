import React from "react";
import styles from "@/styles/header/header.module.scss";
import Link from "next/link";
import { Select } from "antd";
import ImageNew from "../CustomImage/ImageNew";

export default function Header(): React.ReactNode {
  return (
    <div className={styles.header}>
      <div className={styles.nav_left}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link href={"introduction"}>INTRODUCTION</Link>
          </li>
          <li className={styles.item}>
            <Link href={"rental-services"}>RENTAL SERVICES</Link>
          </li>
          <li className={styles.item}>
            <Link href={"about"}>ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Link aria-label="homepage" href={"/"}>
          <ImageNew
            fill
            classNameParent={styles.logo_image}
            objectFit={"cover"}
            priority={true}
            src={"/images/logos/logo2.png"}
            alt="sunny agency facebook ads, agency facebook ads, sunny agency price"
          />
        </Link>
      </div>
      <div className={styles.nav_right}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link href={"reviews"}>REVIEWS</Link>
          </li>
          <li className={styles.item}>
            <Link href={"news"}>FACEBOOK NEWS</Link>
          </li>
          <li className={styles.item}>
            <Link href={"contact"}>CONTACT US</Link>
          </li>
          {/* <li className={styles.item}>
            <Select
              style={{ width: 80 }}
              defaultValue="ENG"
              options={[
                {
                  value: "en",
                  label: "ENG",
                },
                {
                  value: "ru",
                  label: "RUS",
                },
              ]}
            />
          </li> */}
        </ul>
      </div>
    </div>
  );
}
