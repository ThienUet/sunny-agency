import styles from "@/styles/app/home-page/home_page.module.scss";
import SwiperCustom from "./components/SwiperCustom";
import Image from "next/image";
import ImageNew from "@/components/CustomImage/ImageNew";

export default function HomePage(): React.ReactNode {
  return (
    <div className={styles.home_page}>
      <SwiperCustom />
      <div className={styles.home_content}>
        <ul className={styles.content_list}>
          <li className={styles.content_item} data-aos="fade-left">
            <div className={styles.content}>
              <div className={styles.image_content}>
                <ImageNew
                  priority={true}
                  fill
                  src={"/images/content/left_content.png"}
                  alt="Sunny agency, the best platform with facebook ads. We, the sunny agency, the best ads service that's works with facebook meta"
                />
              </div>
              <div className={styles.paragrap_right}>
                <span className={styles.title}>
                  Maximize Your Facebook Ads Efficiency
                </span>
                <p className={styles.description}>
                  Unlock the full potential of your business with our expert
                  Facebook Ads services. Our specialized approach focuses on
                  optimizing ad performance to significantly boost your sales
                  and reach the most valuable customers. With targeted
                  strategies and data-driven insights, we ensure your ads stand
                  out in the crowded marketplace, driving engagement and
                  conversion rates to new heights. Let us help you achieve
                  unparalleled success and make your brand a top contender in
                  your industry.
                </p>
              </div>
            </div>
          </li>
          <li></li>
          <li className={styles.content_item} data-aos="fade-right">
            <div className={styles.content}>
              <div className={styles.image_content}>
                <Image
                  priority={true}
                  fill
                  src={"/images/content/right_content.png"}
                  alt="Sunny agency, the best platform with facebook ads. We, the sunny agency, the best ads service that's works with facebook meta"
                />
              </div>
              <div className={styles.paragrap_left}>
                <span className={styles.title}>
                  Maximize Your Facebook Ads Efficiency
                </span>
                <p className={styles.description}>
                  Unlock the full potential of your business with our expert
                  Facebook Ads services. Our specialized approach focuses on
                  optimizing ad performance to significantly boost your sales
                  and reach the most valuable customers. With targeted
                  strategies and data-driven insights, we ensure your ads stand
                  out in the crowded marketplace, driving engagement and
                  conversion rates to new heights. Let us help you achieve
                  unparalleled success and make your brand a top contender in
                  your industry.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.content_item} data-aos="fade-right">
            <div className={styles.content}>
              <div className={styles.title}>
                <span className={styles.name_site}>Sunny Agency</span>
                <span className={styles.title_desc}>
                  The Best Platform with Facebook Ads
                </span>
              </div>
              <ul className={styles.content_list_child}>
                <li className={styles.content_item_child}>
                  <div className={styles.icon_and_desc}>
                    <div className={styles.icon}>
                      <ImageNew
                        fill
                        src={"/images/reputation/save.png"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="sunny agency, best facebook marketing resource, best account for marketing run ads"
                      />
                    </div>
                    <span className={styles.desc}>
                      Achieve Budget Savings with High Efficiency
                    </span>
                  </div>
                  <div className={styles.content_content}>
                    We have a large support team ready to assist our customers
                    anytime, anywhere. With a customer-centric approach, we
                    understand and prioritize your needs. We offer a service
                    that is both cost-effective and highly efficient.
                  </div>
                </li>
                <li className={styles.content_item_child}>
                  <div className={styles.icon_and_desc}>
                    <div className={styles.icon}>
                      <ImageNew
                        fill
                        src={"/images/reputation/location.png"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="sunny agency, best facebook marketing resource, best account for marketing run ads"
                      />
                    </div>
                    <span className={styles.desc}>
                      Global Presence, Immediate Service
                    </span>
                  </div>
                  <div className={styles.content_content}>
                    Interested in our location? We have a presence in most
                    countries, ensuring quick service delivery to you. Distance
                    is not an issue for us. Contact us for consultation and to
                    experience our services.
                  </div>
                </li>
                <li className={styles.content_item_child}>
                  <div className={styles.icon_and_desc}>
                    <div className={styles.icon}>
                      <ImageNew
                        fill
                        src={"/images/reputation/safe.png"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="sunny agency, best facebook marketing resource, best account for marketing run ads"
                      />
                    </div>
                    <span className={styles.desc}>
                      Secure, Efficient, Reliable: Trust Our Services
                    </span>
                  </div>
                  <div className={styles.content_content}>
                    Trust our services for safety, speed, and peace of mind.
                    With quick transactions and robust security measures, we
                    ensure your confidence and convenience. Experience a
                    worry-free service with us.
                  </div>
                </li>
                <li className={styles.content_item_child}>
                  <div className={styles.icon_and_desc}>
                    <div className={styles.icon}>
                      <ImageNew
                        fill
                        src={"/images/reputation/sercurity.png"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="sunny agency, best facebook marketing resource, best account for maketting run ads"
                      />
                    </div>
                    <span className={styles.desc}>
                      Secure and Confidential: Our Promise to You
                    </span>
                  </div>
                  <div className={styles.content_content}>
                    Using our services guarantees absolute customer information
                    confidentiality and secure transactions. Your data is
                    protected at all times, ensuring peace of mind with every
                    interaction.
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
