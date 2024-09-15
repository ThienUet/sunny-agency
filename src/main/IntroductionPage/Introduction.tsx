import React from "react";
import styles from "@/styles/app/introduction-page/introduction_page.module.scss";
import ImageNew from "@/components/CustomImage/ImageNew";
export default function Introduction(): React.ReactNode {
  return (
    <>
      <div className={styles.introduction}>
        <ImageNew
          classNameParent={styles.banner}
          fill={true}
          src="/images/banner/intro_banner.png"
          alt="Sunny Agency Image About Facebook Ads 2st Service"
        />
        <div className={styles.dialog}>
          <div className={styles.title}>Sunny Agency Ads Services</div>
          <p className={styles.intro_content} data-aos="fade-left">
            Sunny Agency is your trusted partner in Facebook advertising,
            committed to delivering affordable, reliable, and high-quality
            services. We specialize in crafting targeted ad campaigns that
            maximize your reach while minimizing costs, ensuring your brand gets
            the attention it deserves. With a deep understanding of the
            platform&#39;s algorithms and a data-driven approach, Sunny Agency
            is dedicated to boosting your online presence efficiently and
            effectively. Let us help you shine brighter in the digital landscape
            with tailored strategies that resonate with your audience and drive
            tangible results.
          </p>
        </div>
      </div>
      <div className={styles.content_left}>
        <div className={styles.content_for_right}>
          <ImageNew
            classNameImage={styles.content_for_left_image}
            fill={true}
            src=""
            alt="Sunny Agency Image About Facebook Ads 2st Service"
          />
        </div>
        <div className={styles.content_for_left}>
          <title className={styles.title}>Reputable & Pioneering</title>
          <p className={styles.content_left_content}>aaaaaa</p>
        </div>
      </div>
      <div className={styles.content_right}>
        <title className={styles.title}>Low-Cost & Quality</title>
        <p className={styles.content_right_content}></p>
      </div>
      <div className={styles.content_left}>
        <title className={styles.title}>Low-Cost & Quality</title>
        <p className={styles.content_right_content}></p>
      </div>
    </>
  );
}
