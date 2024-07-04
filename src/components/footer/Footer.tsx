import styles from "@/styles/footer/footer.module.scss";
export default function Footer(): React.ReactNode {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <ul className={styles.footer_menu}>
          <li className={styles.footer_item}>
            <div className={styles.image_area}></div>
          </li>
          <li className={styles.footer_item}>
            <span className={styles.title}>OFFICE</span>
            <ul className={styles.address_menu}>
              <li className={styles.address_item}>
                <span className={styles.address_title}>ADDRESS</span>
                <span className={styles.address_content}>
                  225 Something, C16 Some thing, VietNam
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>ADDRESS</span>
                <span className={styles.address_content}>
                  225 Something, C16 Some thing, VietNam
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>ADDRESS</span>
                <span className={styles.address_content}>
                  225 Something, C16 Some thing, VietNam
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.address_title}>ADDRESS</span>
                <span className={styles.address_content}>
                  225 Something, C16 Some thing, VietNam
                </span>
              </li>
              <li className={styles.address_item}>
                <span className={styles.iconSkype}></span>
                <span className={styles.iconTelegram}></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
