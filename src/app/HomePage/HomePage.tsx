import styles from "@/styles/app/home-page/home_page.module.scss";
import SwiperCustom from "./components/SwiperCustom";
export default function HomePage(): React.ReactNode {
  return (
    <div className={styles.home_page}>
      <SwiperCustom />
    </div>
  );
}
