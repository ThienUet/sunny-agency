import Image from "next/image";
import React from "react";

interface ImageNewProps {
  classNameParent?: string;
  classNameImage?: string;
  fill?: boolean;
  src: string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  width?: number;
  height?: number;
  lazyLoad?: boolean;
  sizes?: string;
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
  return (
    <div className={classNameParent ?? "w-full h-96 relative"}>
      <Image
        className={classNameImage ?? ""}
        fill={width && height ? false : fill ?? false}
        priority={priority ?? false}
        style={{
          objectFit: objectFit ?? "fill",
        }}
        objectFit="cover"
        width={width}
        height={height}
        sizes={sizes ?? "100vw"}
        loading={lazyLoad ? "lazy" : "eager"}
        src={src ?? "/image/error/image404.png"}
        alt={alt ?? "sunny agency facebook ads services"}
      />
    </div>
  );
}
