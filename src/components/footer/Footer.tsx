import styles from "@/styles/footer/footer.module.scss";
import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsSkype } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
export default function Footer(): React.ReactNode {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <ul className={styles.footer_menu}>
          <li className={styles.footer_item}>
            <div className={styles.image_area}>
              <Image
                fill
                src={"/images/logos/logo.jpg"}
                alt="sunny agency logo, sunny agency facebook marketing, sunny agency facebook ads sunny agency facebook advertisement"
              />
            </div>
          </li>
          <li className={styles.footer_item}>
            <span className={styles.title}>OFFICE</span>
            <ul className={styles.address_menu}>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <IoLocation />
                  &nbsp;&nbsp;&nbsp;&nbsp;Address:
                </span>
                <span className={styles.address_content}>
                  118 Pham Van Dong - Tu Liem - Ha Noi
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <FaPhone />
                  &nbsp;&nbsp;&nbsp;&nbsp;Phone:
                </span>
                <span className={styles.address_content}>0123 456 789</span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <IoIosMail />
                  &nbsp;&nbsp;&nbsp;&nbsp;Mail:
                </span>
                <span className={styles.address_content}>
                  test-something@gmail.com
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <BsSkype />
                  &nbsp;&nbsp;&nbsp;&nbsp;Skype:
                </span>
                <span className={styles.address_content}>
                  <Link href={"#"}>TheAnh28</Link>
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.iconSkype}></span>
                <span className={styles.iconTelegram}></span>
              </li>
            </ul>
            <ul className={styles.social_media_menu}>
              <li className={styles.social_item}>
                <Link
                  className="w-full h-full flex justify-center items-center"
                  href={"#"}
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className={styles.social_item}>
                <Link
                  className="w-full h-full flex justify-center items-center"
                  href={"#"}
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className={styles.social_item}>
                <Link
                  className="w-full h-full flex justify-center items-center"
                  href={"#"}
                >
                  <FaTelegramPlane />
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.footer_item}>
            <span className={styles.title}>Direction</span>
            <ul className={styles.address_menu}>
              <li className={styles.address_item}>
                <Link href={"#"}>Home - Go to our Home Page</Link>
              </li>
              <li className={styles.address_item}>
                <Link href={"#"}>Rental services - All services</Link>
              </li>
              <li className={styles.address_item}>
                <Link href={"#"}>Process - Watch your process</Link>
              </li>
              <li className={styles.address_item}>
                <Link href={"#"}>Reviews - Some reviews of customer</Link>
              </li>
              <li className={styles.address_item}>
                <Link href={"#"}>Facebook News - Tus, Tricks of Facebook</Link>
              </li>
              <li className={styles.address_item}>
                <Link href={"#"}>Contact us - How to contact us</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <span className={styles.copyright_content}>
          All rights reserved © 2023 - Designed by TheAnh28
        </span>
      </div>
    </div>
  );
}
