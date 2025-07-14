import styles from "@/styles/social-bar/social.module.scss";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export default function SocialBar(): React.ReactNode {
  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 200,
      }}
    >
      <div className={styles.social_bar}>
        <ul className={styles.social_list}>
          <li className={styles.social_item}>
            <Link aria-label="facebook" href="#" className={styles.social_link}>
              <FaFacebookF />
            </Link>
          </li>
          <li className={styles.social_item}>
            <Link
              aria-label="instagram"
              href="#"
              className={styles.social_link}
            >
              <FaInstagram />
            </Link>
          </li>
          <li className={styles.social_item}>
            <Link aria-label="telegram" href="#" className={styles.social_link}>
              <FaTelegramPlane />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
