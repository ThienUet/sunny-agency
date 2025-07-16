import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./SwiperCustom.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dữ liệu mẫu, có thể truyền từ props hoặc import từ ngoài
const cardData = [
  {
    image: "/images/reputation/save.png",
    title: "Tiết kiệm ngân sách, hiệu quả vượt trội",
    content:
      "Đội ngũ hỗ trợ đông đảo, sẵn sàng phục vụ khách hàng mọi lúc mọi nơi. Dịch vụ tối ưu chi phí, hiệu quả cao, đặt khách hàng làm trung tâm.",
  },
  {
    image: "/images/reputation/location.png",
    title: "Phủ sóng toàn cầu, phục vụ tức thì",
    content:
      "Có mặt tại hầu hết các quốc gia, đảm bảo giao dịch nhanh chóng. Khoảng cách không còn là vấn đề, liên hệ tư vấn ngay!",
  },
  {
    image: "/images/reputation/safe.png",
    title: "An toàn, nhanh chóng, đáng tin cậy",
    content:
      "Dịch vụ đảm bảo an toàn, giao dịch nhanh, bảo mật tuyệt đối. Khách hàng yên tâm sử dụng dịch vụ của chúng tôi.",
  },
  {
    image: "/images/reputation/sercurity.png",
    title: "Bảo mật tuyệt đối, cam kết riêng tư",
    content:
      "Thông tin khách hàng được bảo mật tuyệt đối, giao dịch an toàn, yên tâm tuyệt đối khi sử dụng dịch vụ.",
  },
];

const SwiperCustom = ({ data = cardData }) => {
  return (
    <div className={styles.swiper_wrapper}>
      <Swiper
        modules={[Pagination]}
        // navigation // bỏ navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        className={styles.swiper}
      >
        {data.map((card, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.image_wrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 400px"
                />
              </div>
              <div className={styles.card_content}>
                <h3 className={styles.card_title}>{card.title}</h3>
                <p className={styles.card_desc}>{card.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCustom;
