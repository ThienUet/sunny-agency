import React from "react";
import styles from "@/styles/app/review-page/review_page.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

import Image from "next/image";
import ImageNew from "@/components/CustomImage/ImageNew";

const badges = [
  {
    rate: "5",
    width: "100%",
    number: "2.0k",
    color: "rgb(25, 238, 196)",
  },
  {
    rate: "4",
    width: "60%",
    number: "1.0k",
    color: "rgb(241, 78, 246)",
  },
  {
    rate: "3",
    width: "20%",
    number: "500",
    color: "rgb(255, 180, 67)",
  },
  {
    rate: "2",
    width: "5%",
    number: "200",
    color: "rgb(67, 202, 255)",
  },
  {
    rate: "1",
    width: "2%",
    number: "0k",
    color: "rgb(255, 111, 67)",
  },
];

const reviewItems = [
  {
    imageUrl: "/images/user/playboi.jpg",
    username: "Playboi Carti",
    spent: 200,
    review: 14,
    rating: 4,
    date: "24-10-2022",
    comment: `I've been using Sunny Agency for the past year, and I couldn't be happier with their service! They provided me with high-quality Facebook accounts that perfectly matched my advertising needs. The team is very responsive and always answers my questions quickly, which is a big plus for me. I also appreciate their focus on security—I've never had any issues with account safety or transactions. If you're looking for a trustworthy and professional service, I highly recommend Sunny Agency!`,
  },
  {
    imageUrl: "/images/user/darwin.webp",
    username: "Darwin Nuzez",
    spent: 100,
    review: 2,
    rating: 5,
    date: "24-10-2022",
    comment: `I came across Sunny Agency when I needed some Facebook accounts for an ad campaign. I was initially skeptical, but they quickly earned my trust with their transparency and professionalism. The accounts they provided worked flawlessly, and their customer support team was quick to respond to all my inquiries. What stood out to me most was their commitment to security—every transaction felt safe and secure. My only minor complaint is that I had to wait a little longer than expected to get my accounts, but it was worth it for the quality.`,
  },
  {
    imageUrl: "/images/user/klop.jpg",
    username: "Jurgen Klop",
    spent: 300,
    review: 2,
    rating: 5,
    date: "24-10-2022",
    comment: `Sunny Agency has been a game-changer for my business. I run several Facebook ad campaigns, and finding reliable, high-quality accounts used to be a challenge. Since partnering with them, my campaigns have been running smoothly with no issues. Their team always responds promptly, and their attention to detail and security gives me peace of mind. They go above and beyond to make sure their clients are satisfied. I've recommended them to several of my colleagues and will continue to do so!`,
  },
  {
    imageUrl: "/images/user/naomi.jpg",
    username: "Naomi",
    spent: 1000,
    review: 1,
    rating: 5,
    date: "24-10-2022",
    comment: `I can't say enough good things about Sunny Agency. Their services are not only reliable but also incredibly secure. As someone who values privacy and security, I was impressed by their use of encryption and the way they handle transactions. The Facebook accounts they provide are perfect for what I need, and their customer service is outstanding. Every time I have a question or concern, they respond quickly and professionally. If you're looking for a company you can trust, this is it.`,
  },
  {
    imageUrl: "/images/user/nicky.jpg",
    username: "Nicky Minu",
    spent: 3000,
    review: 9,
    rating: 5,
    date: "24-10-2022",
    comment: `Sunny Agency came through when I needed reliable Facebook accounts for my business. What I appreciate the most is their excellent customer service. Anytime I had an issue or question, their team was quick to respond and resolve it. Their commitment to security is also impressive; I felt safe making transactions with them. The only downside is that sometimes the demand for their services is high, and I had to wait a bit for my request to be fulfilled, but the quality made up for it.`,
  },
  {
    imageUrl: "/images/user/sza.jpg",
    username: "SZA",
    spent: 2000,
    review: 1,
    rating: 5,
    date: "24-10-2022",
    comment: `Working with Sunny Agency has been one of the best decisions I've made for my business. Their Facebook accounts are top-notch and exactly what I needed to enhance my social media marketing efforts. The team is professional, attentive, and extremely knowledgeable about Facebook's platform. What really sets them apart is their focus on security—I've never had to worry about any of my data or financial information being compromised. The process was seamless from start to finish, and I highly recommend them!`,
  },
  {
    imageUrl: "/images/user/stormi.jpg",
    username: "Stormi",
    spent: 3200,
    review: 2,
    rating: 5,
    date: "24-10-2022",
    comment: `I've been using Sunny Agency's services for a few months now, and I'm extremely impressed. The Facebook accounts they provide are high-quality and work perfectly for my marketing campaigns. One thing that really stands out is their attention to detail, especially when it comes to security. I've had no issues with safety, and they make sure that every transaction is protected. Their customer service is also top-notch, always quick to respond and super helpful. I highly recommend Sunny Agency to anyone in need of reliable and secure Facebook accounts`,
  },
  {
    imageUrl: "/images/user/travis.jpg",
    username: "Travis Scott",
    spent: 400,
    review: 1,
    rating: 5,
    date: "24-10-2022",
    comment: `Sunny Agency has been a great partner for our business. We rely heavily on Facebook for advertising, and they’ve consistently delivered high-quality accounts that help us get the job done. What I appreciate most is their commitment to customer service—they’re always available when I need them and provide fast, efficient support. Their focus on security also gives me peace of mind, knowing that all transactions are encrypted and safe. I’m glad I found this company, and I’ll definitely continue using them in the future. Highly recommended for anyone looking for secure and trustworthy Facebook account services.`,
  },
  {
    imageUrl: "/images/user/weekend.jpg",
    username: "The Weekend",
    spent: 700,
    review: 3,
    rating: 5,
    date: "24-10-2022",
    comment: `I had a positive experience with Sunny Agency and would recommend them to others. The Facebook accounts I received were of good quality and helped improve my advertising reach. The team was responsive, answering all my questions promptly, which made me feel valued as a customer. I especially appreciate their focus on security, as that’s a big concern for me when working with online services. Although there was a minor delay in receiving the accounts, it wasn’t a huge issue considering the overall quality. I’ll definitely be using their services again for future campaigns.`,
  },
  {
    imageUrl: "/images/user/ye.jpg",
    username: "Kanye West",
    spent: 200,
    review: 19,
    rating: 5,
    date: "24-10-2022",
    comment: `I was looking for a reliable service to get Facebook accounts for my business, and Sunny Agency delivered beyond my expectations. From start to finish, the process was smooth and efficient. Their customer service team is excellent—they responded to my inquiries within minutes and were very knowledgeable about what I needed. The accounts they provided were exactly what I was looking for, and everything has been running smoothly. I’m also impressed with the security measures they have in place, ensuring that all transactions are safe. I’ll be sticking with Sunny Agency for all my future needs!`,
  },
];

const ReviewPage = () => {
  const renderStars = (num: number) => {
    const activeStars: React.ReactElement[] = [];
    const inactiveStar: React.ReactElement[] = [];

    for (let i = 1; i <= num; i++) {
      activeStars.push(<FaStar className={styles.active_star} />);
    }

    if (num < 5) {
      for (let i = 1; i <= 5 - num; i++) {
        inactiveStar.push(<FaStar className={styles.inactive_star} />);
      }
    }

    return (
      <>
        {activeStars}
        {inactiveStar}
      </>
    );
  };

  return (
    <div className={styles.review_page_container}>
      <div className={styles.review_page_content}>
        <div className={styles.review_header_container}>
          <div className={styles.review_header}>REVIEWS</div>
          <div className={styles.date}>March 2021 - Now</div>
        </div>

        <div className={styles.wrap_overall}>
          <div className={styles.overall_item}>
            <p className={styles.overall_item_title}>Total Review</p>
            <div className={styles.wrap_overall_parameter}>
              <div className={styles.overall_number}>10.0K</div>
              <div className={styles.growth_percentage}>21%</div>
            </div>
            <div className={styles.overall_comment}>
              Growth in reviews on this year
            </div>
          </div>

          <div className={styles.overall_item}>
            <p className={styles.overall_item_title}>Average Rating</p>
            <div className={styles.wrap_overall_parameter}>
              <div className={styles.overall_number}>4.0</div>
              <div className={styles.wrap_rating}>
                <FaStar className={styles.active_star} />
                <FaStar className={styles.active_star} />
                <FaStar className={styles.active_star} />
                <FaStar className={styles.active_star} />
                <FaStar className={styles.inactive_star} />
              </div>
            </div>
            <div className={styles.overall_comment}>
              Avarage rating on this year
            </div>
          </div>

          <div className={styles.overall_item}>
            {badges.map((item, index) => (
              <div className={styles.rating_category_item} key={index}>
                <FaStar className={styles.star} />
                <div className={styles.badge_number}>{item.rate}</div>
                <div className={styles.badge_container}>
                  <div
                    style={{
                      width: item.width,
                      backgroundColor: item.color,
                      height: "0.4rem",
                    }}
                    className={styles.badge}
                  />
                  <div className={styles.badge_number}>{item.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {reviewItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.divider}></div>

            <div className={styles.review_item}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <ImageNew
                    classNameParent={styles.avatar_image}
                    src={item.imageUrl}
                    fill
                    objectFit="cover"
                    alt="user"
                  />
                </div>
                <div className={styles.user_info}>
                  <p className={styles.user_name}>{item.username}</p>
                  <div className={styles.user_props}>
                    Total spent:&nbsp;
                    <div className={styles.user_value}>${item.spent}</div>
                  </div>
                  <div className={styles.user_props}>
                    Total Review:&nbsp;
                    <div className={styles.user_value}>{item.review}</div>
                  </div>
                </div>
              </div>

              <div className={styles.review_detail}>
                <div className={styles.rating_container}>
                  <div className={styles.wrap_rating}>
                    {renderStars(item.rating)}
                  </div>
                  <div className={styles.rating_date}>{item.date}</div>
                </div>
                <div className={styles.comment}>{item.comment}</div>
                <div className={styles.wrap_action_button}>
                  <div className={styles.button}>Public Comment</div>
                  <div className={styles.button}>Direct Message</div>

                  <div className={styles.icon_button}>
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
