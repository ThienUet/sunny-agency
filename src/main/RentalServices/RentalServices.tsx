import React from "react";
import styles from "@/styles/app/rental-services/rental-services.module.scss";
import Banner from "@/components/banner/Banner";
import { Button, Divider } from "antd";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const breadcrumbs = ["HOME", " > ", "RENTAL SERVICES"];
export default function RentalServices() {
  return (
    <div className={styles.rental_services}>
      <div className={styles.rental_content}>
        <ul className={styles.rental_list}>
          <li className={styles.rental_item}>
            <span className={styles.rental_name}>Starter</span>
            <Divider />
            <div className={styles.price_and_desc}>
              <span className={styles.price}>$1500</span>
              <span className={styles.desc}>
                For individuals who want to try out the most advanced Service
              </span>
            </div>
            <div className={styles.rental_btn}>
              <Button type="primary">Contact Now</Button>
            </div>
            <Divider />
            <div className={styles.feature}>
              <span className={styles.name}>Plans feature</span>
              <ul className={styles.feature_list}>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Generate speech in 29 languages using thousands of unique
                    voices
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Translate content with automatic dubbing
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Create custom voice models
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Access to all premium voices
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li className={`${styles.rental_item} ${styles.featured}`}>
            <span className={styles.rental_name}>Starter</span>
            <Divider />
            <div className={styles.price_and_desc}>
              <span className={styles.price}>$1500</span>
              <span className={styles.desc}>
                For individuals who want to try out the most advanced Service
              </span>
            </div>
            <div className={styles.rental_btn}>
              <Button type="primary">Contact Now</Button>
            </div>
            <Divider />
            <div className={styles.feature}>
              <span className={styles.name}>Plans feature</span>
              <ul className={styles.feature_list}>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Generate speech in 29 languages using thousands of unique
                    voices
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Translate content with automatic dubbing
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Create custom voice models
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Access to all premium voices
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.rental_item}>
            <span className={styles.rental_name}>Starter</span>
            <Divider />
            <div className={styles.price_and_desc}>
              <span className={styles.price}>$1500</span>
              <span className={styles.desc}>
                For individuals who want to try out the most advanced Service
              </span>
            </div>
            <div className={styles.rental_btn}>
              <Button type="primary">Contact Now</Button>
            </div>
            <Divider />
            <div className={styles.feature}>
              <span className={styles.name}>Plans feature</span>
              <ul className={styles.feature_list}>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Generate speech in 29 languages using thousands of unique
                    voices
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Translate content with automatic dubbing
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Create custom voice models
                  </span>
                </li>
                <li className={styles.feature_item}>
                  <FaRegCheckCircle className={styles.item_icon} />
                  <span className={styles.item_content}>
                    Access to all premium voices
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
