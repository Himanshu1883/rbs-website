import Image, { type ImageProps } from "next/image";
import type { SiteImage } from "@/content/content";

type Props = {
  image: SiteImage;
  className?: string;
  imgClassName?: string;
  sizes: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
} & Omit<ImageProps, "src" | "alt" | "width" | "height" | "fill">;

export function PortraitImage({
  image,
  className = "",
  imgClassName = "",
  sizes,
  priority = false,
  fill = true,
  width,
  height,
  ...rest
}: Props) {
  const style = {
    objectPosition: image.objectPosition ?? "50% 20%",
  };

  if (fill) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className={`object-cover ${imgClassName}`}
          style={style}
          {...rest}
        />
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={width ?? image.src.width}
      height={height ?? image.src.height}
      sizes={sizes}
      placeholder="blur"
      priority={priority}
      className={imgClassName}
      style={style}
      {...rest}
    />
  );
}
