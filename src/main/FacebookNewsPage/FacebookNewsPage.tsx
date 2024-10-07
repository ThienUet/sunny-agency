import React from "react";
import styles from "@/styles/app/facebook-news-page/facebook_news_page.module.scss";
import { Divider } from "antd";
import ImageNew from "@/components/CustomImage/ImageNew";

const news = [
  {
    area: "Meta news",
    title: `Don't lest your business be a victim: Protect your Facebook account from phishing`,
    date: "about a month ago",
    image: "/images/news/news5.jpg",
    url: "https://www.facebook.com/business/news/dont-let-your-business-be-a-victim-protect-your-facebook-account-from-phishing",
  },
  {
    area: "Meta news",
    title: "New Ways for Businesses to Do More with Messaging",
    date: "about a month ago",
    image: "/images/news/news6.jpg",
    url: "https://www.facebook.com/business/news/new-ways-for-business-to-do-more-with-messaging",
  },
  {
    area: "Meta news",
    title:
      "Meta Agency First Awards 2023 - Reels, AI, and brand advertising are the three key factors that will help brands reach new heights in 2024",
    date: "about a month ago",
    image: "/images/news/news7.webp",
    url: "https://www.facebook.com/business/news/hk-meta-agency-first-awards-2023/",
  },
  {
    area: "Meta news",
    title:
      "Meta Hong Kong & Singapore Financial Forum 2023: Building Full Funnel Marketing Strategies",
    date: "about a month ago",
    image: "/images/news/news8.webp",
    url: "https://www.facebook.com/business/news/HK_SG_financial_forum",
  },
  {
    area: "Meta news",
    title: "Make it Meta: Supercharge your business",
    date: "about a month ago",
    image: "/images/news/news9.webp",
    url: "https://www.facebook.com/business/news/hk-supercharge",
  },
  {
    area: "Meta news",
    title: "Build your business with Meta",
    date: "16 November 2023",
    image: "/images/news/news10.webp",
    url: "https://www.facebook.com/business/news/hk-build-your-business-with-Meta",
  },
  {
    area: "Meta news",
    title: `Meta Marketing Summit Hong Kong 2023 (2):Build winning brands in the age of shifting new normal`,
    date: "3 November 2023",
    image: "/images/news/news8.webp",
    url: "https://www.facebook.com/business/news/mms-hk2023-branding",
  },
  {
    area: "Meta news",
    title: `AI and creativity: Capturing APAC's travel rebound`,
    date: "7 November 2023",
    image: "/images/news/news11.webp",
    url: "https://www.facebook.com/business/news/travel_summit_hk",
  },
  {
    area: "Meta news",
    title: "Healthcare focus: Amplifying engagement from discovery to loyalty",
    date: "7 August 2023",
    image: "/images/news/news12.webp",
    url: "https://www.facebook.com/business/news/healthcare_summit_hk",
  },
  {
    area: "Meta news",
    title:
      "Maximizing Meta Video Ads for Short & Long Term Impact in Asia Pacific",
    date: "May 2023",
    image: "/images/news/news13.png",
    url: "https://www.facebook.com/business/news/maximizing-impact-of-meta-video-ads-for-short-and-long-term-impact",
  },
  {
    area: "Meta news",
    title: "Power up your creative during digital advertising changes",
    date: "29 July 2022",
    image: "/images/news/news14.webp",
    url: "https://www.facebook.com/business/news/scale-business-ad-creatives-meta-tools",
  },
  {
    area: "News Video Reports",
    title: `Meta's president of global affairs Nick Clegg on tackling political disinformation`,
    date: "about a month ago",
    image: "/images/news/news1.jpg",
    url: `https://www.channelnewsasia.com/watch/metas-president-global-affairs-nick-clegg-tackling-political-disinformation-4657111`,
  },
  {
    area: "Asia",
    title:
      "Analysis: Big Tech fires first salvo against Malaysia’s licensing regime, but faces tricky next steps",
    date: "about a month ago",
    image: "/images/news/news2.jpg",
    url: `https://www.channelnewsasia.com/asia/malaysia-social-media-licence-regulation-pushback-tech-firms-aic-4575131`,
  },
  {
    area: "Asia",
    title:
      "Analysis: The Anwar government’s growing push against Big Tech raises questions of its true intentions",
    date: "about a month ago",
    image: "/images/news/news3.jpg",
    url: `https://www.channelnewsasia.com/asia/malaysia-social-media-licence-big-tech-anwar-ibrahim-meta-tiktok-4534646`,
  },
  {
    area: "Asia",
    title: `Malaysian PM Anwar accepts Meta's apology over removed posts on late Hamas leader Haniyeh`,
    date: "about a month ago",
    image: "/images/news/news4.jpg",
    url: `https://www.channelnewsasia.com/watch/malaysian-pm-anwar-accepts-metas-apology-over-removed-posts-late-hamas-leader-haniyeh-4530266`,
  },
];

const FacebookNewsPage = () => {
  return (
    <div className={styles.facebook_news_container}>
      <div className={styles.news_page_content}>
        <div className={styles.header_title}>FACEBOOK NEWS</div>
        <div className={styles.wrap_content}>
          <div>
            {news.map((item, index) => (
              <a key={index} href={item.url} target="_blank">
                <div className={styles.wrap_news_item}>
                  <div style={{ height: 120 }}>
                    <div
                      className={styles.wrap_news_image}
                      style={{ width: 200, height: 120 }}
                    >
                      <ImageNew
                        fill
                        objectFit="cover"
                        src={item.image}
                        classNameParent={styles.image_new_wrap}
                        alt="Sunny aGency Facebook Services"
                      />
                    </div>
                  </div>
                  <div>
                    <div className={styles.news_area}>{item.area}</div>
                    <div className={styles.news_title}>{item.title}</div>
                    <div className={styles.news_date}>{item.date}</div>
                  </div>
                </div>
                <Divider />
              </a>
            ))}
          </div>

          <div className={styles.wrap_about_meta}>
            <div style={{ position: "sticky", top: 0 }}>
              <ImageNew
                classNameParent={styles.image_wrap_about}
                fill
                objectFit="fill"
                src="/images/news/meta.jpg"
                alt="Sunny Agency News Service, Sunny Agency Facebook services"
              />
              <ImageNew
                fill
                classNameParent={styles.image_wrap_about_second}
                objectFit="fill"
                src="/images/news/facebook.png"
                alt="Sunny Agency News Service, Facebook Sunny Agency Services"
              />
              <div className={styles.sun_agency_introduce}>
                Sunny Agency is your trusted partner in Facebook advertising,
                committed to delivering affordable, reliable, and high-quality
                services. We specialize in crafting targeted ad campaigns that
                maximize your reach while minimizing costs, ensuring your brand
                gets the attention it deserves.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookNewsPage;
