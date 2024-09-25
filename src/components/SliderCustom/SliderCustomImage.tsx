import React, { MutableRefObject } from "react";
import styles from "@/styles/slider-custom/slider-custom-image.module.scss";
import { ImageInterface } from "@/interfaces/ImageArray";
import ImageNew from "../CustomImage/ImageNew";

interface SliderCustomImageProps {
  imageArr: Array<ImageInterface>;
  showArrows?: boolean;
  animate?:
    | "top-down"
    | "bottom-up"
    | "left-right"
    | "right-left"
    | "fade"
    | "none";
  speed?: number;
  loop?: boolean;
  itemWidth?: number;
  itemHeight?: number;
}
export default function SliderCustomImage({
  imageArr,
  showArrows,
  animate,
  speed,
  loop,
  itemWidth,
  itemHeight,
}: SliderCustomImageProps): React.ReactNode {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [imageArray, setImageArray] =
    React.useState<Array<ImageInterface>>(imageArr);
  React.useEffect(() => {
    if (imageArr.length <= 0) {
      const _imageArray: Array<ImageInterface> = [
        {
          src: "/images/error/image404.png",
          alt: "Sunny Agency - Image not found",
        },
        {
          src: "/images/error/image404.png",
          alt: "Sunny Agency - Image not found",
        },
        {
          src: "/images/error/image404.png",
          alt: "Sunny Agency - Image not found",
        },
      ];
      setImageArray(_imageArray);
    }
  }, [imageArr.length, imageArray]);

  React.useEffect(() => {
    const element = containerRef.current;

    if (element) {
      console.log("YES");

      const handleWheel = (event: WheelEvent) => {
        element.scrollLeft += event.deltaY;
        event.preventDefault();
      };

      const addWheelListener = () => {
        element.addEventListener("wheel", handleWheel as EventListener);
      };

      const removeWheelListener = () => {
        element.removeEventListener("wheel", handleWheel as EventListener);
      };

      element.addEventListener("mouseenter", addWheelListener);
      element.addEventListener("mouseleave", removeWheelListener);

      return () => {
        element.removeEventListener("mouseenter", addWheelListener);
        element.removeEventListener("mouseleave", removeWheelListener);
      };
    }
  }, []);
  return (
    <div className={styles.slider_custom_image} ref={containerRef}>
      {imageArray.map((item, index) => (
        <div className={styles.slider_image} key={index}>
          <ImageNew
            classNameParent={styles.image_wrapper}
            fill
            objectFit="cover"
            src={item.src}
            alt={item.alt}
            width={itemWidth}
            height={itemHeight}
          />
        </div>
      ))}
    </div>
  );
}
