import Image from "next/image";
import React from "react";

interface ImageNewProps {
  classNameParent?: string;
  classNameImage?: string;
  fill?: boolean;
  src?: string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  width?: number;
  height?: number;
  lazyLoad?: boolean;
  sizes?: string;
  layout?: string;
}
export default function ImageNew(props: ImageNewProps): React.ReactNode {
  const {
    classNameParent,
    classNameImage,
    fill,
    src,
    alt,
    priority,
    width,
    height,
    lazyLoad,
    objectFit,
    sizes,
  } = props;
  const [srcImage, setSrcImage] = React.useState(src);

  const handleError = () => {
    setSrcImage("/images/error/image404.png");
  };
  return (
    <div className={classNameParent ?? "w-full h-96 relative"}>
      <Image
        className={classNameImage ?? ""}
        fill={width && height ? false : fill ?? false}
        priority={priority ?? false}
        style={{
          objectFit: objectFit ?? "fill",
        }}
        width={width}
        height={height}
        sizes={
          sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        loading={lazyLoad ? "lazy" : "eager"}
        src={srcImage ?? "/images/error/image404.png"}
        alt={alt ?? "sunny agency facebook ads services"}
        onError={handleError}
      />
    </div>
  );
}
