import styles from "@/styles/app/home-page/component/swiper.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

interface SwiperSlidePoster {
  url: string;
  image_url: string;
  name: string;
}

const dataSlidePoster: SwiperSlidePoster[] = [
  {
    url: "#",
    image_url: "/images/banner/banner1.jpg",
    name: "Banner",
  },
  {
    url: "#",
    image_url: "/images/banner/banner2.jpg",
    name: "Banner1",
  },
  {
    url: "#",
    image_url: "/images/banner/banner3.jpg",
    name: "Banner1",
  },
  {
    url: "#",
    image_url: "/images/banner/banner4.jpg",
    name: "Banner1",
  },
];
export default function SwiperCustom(): React.ReactNode {
  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className={styles.swiper_container}
        modules={[EffectFade, Autoplay, Navigation]}
        effect={"fade"}
      >
        {dataSlidePoster && dataSlidePoster.length > 0
          ? dataSlidePoster.map((slide, key) => {
              return (
                <SwiperSlide className={styles.swiper_slide} key={key}>
                  <Image
                    fill
                    src={slide.image_url}
                    alt={slide.name}
                    loading="lazy"
                  />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
      <div className={styles.swiper_absolute}>NỘI DUNG TIẾP TỤC TẠI ĐÂY !</div>
    </div>
  );
}
