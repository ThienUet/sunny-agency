import React from "react";
import styles from "@/styles/app/introduction-page/introduction_page.module.scss";
import ImageNew from "@/components/CustomImage/ImageNew";
import { AiFillCheckCircle } from "react-icons/ai";
import SliderCustomImage from "@/components/SliderCustom/SliderCustomImage";
import { ImageInterface } from "@/interfaces/ImageInterface";
import Link from "next/link";

interface IntroItem {
  title: React.ReactNode | string;
  imageUrl: string;
  altImage: string;
  content: string;
}
const contentArr: Array<IntroItem> = [
  {
    title: <h4 className={styles.item_title}>Limited Liability Company</h4>,
    imageUrl: "/images/banner/introbanner2.jpg",
    altImage: "Sunny Agency Limited Liability Company",
    content: `Our company is a single-member limited liability company,
              established in 2018. With a background as a long-time employee at
              a Facebook service company, I understand the platform deeply and
              am committed to providing the best services to those in need of
              what Facebook has to offer.`,
  },
  {
    title: <h4 className={styles.item_title}>Facebook Account Resources</h4>,
    imageUrl: "/images/introduction/fbResource.png",
    altImage: "Sunny Agency - Reliable Facebook Account Services",
    content:
      "We dedicated to providing secure and trustworthy Facebook account resources for our partners. With extensive experience in the industry, we ensure that our clients receive high-quality accounts that meet their needs for advertising, engagement, and other Facebook-related activities. Our commitment to reliability and safety makes us a preferred choice for businesses looking to leverage Facebook's platform effectively.",
  },
  {
    title: (
      <h4 className={styles.item_title}>Your Reliable Facebook Partner</h4>
    ),
    imageUrl: "/images/introduction/parner.png",
    altImage: "Sunny Agency - Quick and Trustworthy Services",
    content:
      "We dedicated to providing secure and trustworthy Facebook account resources for our partners. Our team is renowned for its rapid response times, ensuring that any inquiries or issues are addressed promptly. We pride ourselves on delivering seamless and efficient support, making us a preferred choice for businesses looking to leverage Facebook's platform effectively.",
  },
  {
    title: <h4 className={styles.item_title}>Premier Account Solutions</h4>,
    imageUrl: "/images/introduction/solution.png",
    altImage: "Sunny Agency - Secure and Efficient Services",
    content:
      "Established in 2018, Sunny Agency specializes in providing top-tier Facebook account resources with a focus on security and reliability. Our team is committed to delivering prompt customer service, ensuring all inquiries are handled swiftly and efficiently. We also prioritize the security of your transactions, utilizing advanced encryption methods to safeguard your financial information. Trust Sunny Agency for a seamless and secure experience on Facebook.",
  },
];

const arrayImages: Array<ImageInterface> = [
  {
    src: "/images/introduction/parner.png",
    alt: "Sunny Agency - Reliable Facebook Account Services",
  },
  {
    src: "/images/introduction/resources.png",
    alt: "Sunny Agency - Reliable Facebook Account Services",
  },
  {
    src: "/images/introduction/services.png",
    alt: "Sunny Agency - Reliable Facebook Account Services",
  },
];
export default function Introduction(): React.ReactNode {
  return (
    <>
      <div className={styles.introduction}>
        <ImageNew
          classNameParent={styles.banner}
          fill={true}
          src="/images/banner/intro_banner.png"
          priority={true}
          sizes=""
          alt="Sunny Agency Image About Facebook Ads 2st Service"
        />
        <div className={styles.dialog}>
          <div className={styles.title}>Sunny Agency Ads Services</div>
          <p className={styles.intro_content}>
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
      <div className={styles.introduction_layout}>
        <h3 className={styles.title}>Introduction Sunny Agency</h3>
        <div className={styles.intro_cards}>
          {contentArr.map((item, index) => (
            <div className={styles.intro_card} key={index}>
              <div className={styles.card_icon}>
                <AiFillCheckCircle />
              </div>
              <div className={styles.card_title}>{item.title}</div>
              <div className={styles.card_image_wrapper}>
                <ImageNew
                  classNameParent={styles.card_image}
                  fill
                  objectFit="cover"
                  src={item.imageUrl}
                  alt={item.altImage}
                />
              </div>
              <div className={styles.card_content}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.trust}>
        <h3 className={styles.trust_title}>Believe In Us</h3>
        <h3 className={styles.trust_comment}>Please read more about us !</h3>
        <div className={styles.trust_content}>
          <ImageNew
            classNameParent={styles.trust_image}
            fill
            src="/images/introduction/believe.png"
            priority={true}
            alt="Trust Sunny Agency Service, All will be yours ! Agency Trust Service Facebook Ads, FaceBook Resources"
          />
          <div className={styles.content}>
            <h3 className={styles.title}>How do we work ?</h3>
            <p className={styles.paragraph}>
              {`Rely on us for all your Facebook account and resource needs.
              Simply reach out to us, and we'll handle the rest. We accept
              payments in USDT, BTC, and more. Contact us today and experience
              our seamless service!`}
            </p>
            <div className={styles.content_button}>
              <Link href="/contact" passHref legacyBehavior>
                <button type="button">Contact Us</button>
              </Link>
            </div>
            <SliderCustomImage imageArr={arrayImages} />
          </div>
        </div>
      </div>
      <div className={styles.link_to_services}>
        <h3 className={styles.title}>GET STARTED NOW</h3>
        <p className={styles.content}>
          Go to <Link href="/rental-services">Rental Services</Link>
        </p>
      </div>
    </>
  );
}
