import React from "react";
import styles from "@/styles/header/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";

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
            <Link href={"processes"}>PROCESSES</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Link aria-label="homepage" href={"/"}>
          <Image
            fill
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
        </ul>
      </div>
    </div>
  );
}
