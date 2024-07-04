import React from "react";
import styles from "@/styles/header/header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header(): React.ReactNode {
  return (
    <div className={styles.header}>
      <div className={styles.nav_left}>
        <ul className={styles.menu}>
          <li className={styles.item}>INTRODUCTION</li>
          <li className={styles.item}>RENTAL SERVICES</li>
          <li className={styles.item}>PROCESSES</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Link href={"#"}>
          <Image
            fill
            src={"/images/logos/logo.jpg"}
            alt="sunny agency facebook ads, agency facebook ads, sunny agency price"
          />
        </Link>
      </div>
      <div className={styles.nav_right}>
        <ul className={styles.menu}>
          <li className={styles.item}>REVIEWS</li>
          <li className={styles.item}>FACEBOOK NEWS</li>
          <li className={styles.item}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}
