import React from "react";
import styles from "@/styles/app/contact-page/contact_page.module.scss";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsSkype } from "react-icons/bs";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className={styles.contact_page_container}>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <div className={styles.header_title}>CONTACT US</div>
          <div className={styles.contact_content}>
            <div className={styles.form_title}>Get in touch with us</div>

            <ul className={styles.address_menu}>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <IoLocation style={{ color: "red" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;Address:
                </span>
                <span className={styles.address_content}>
                  118 Pham Van Dong - Tu Liem
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <FaPhone style={{ color: "green" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;Phone:
                </span>
                <span className={styles.address_content}>0123 456 789</span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <IoIosMail style={{ color: "blue" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;Mail:
                </span>
                <span className={styles.address_content}>
                  test-something@gmail.com
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>
                  <BsSkype style={{ color: "#00aff0" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;Skype:
                </span>
                <span className={styles.address_content}>
                  <Link aria-label="profile" href={"#"}>
                    TheAnh28
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrap_image}>
          <img src="/images/contact/metads.png" />
        </div>
      </div>
      <div className={styles.wrap_end_image}>
        <img
          src={"/images/contact/emoji.jpg"}
          style={{ width: "100%", borderRadius: 12 }}
        />
        <div className={styles.wrap_quick_buttons}>
          <span>Let's dive in our amazing services</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
