import type { Photo } from "@/content/site";
import { cx, photoFallback, photoSrcSet } from "@/lib/asset";

type Props = {
  photo: Photo;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/** Responsive, lazy-loaded WebP photo with JPG fallback. */
export function Picture({ photo, sizes = "100vw", className, imgClassName, priority }: Props) {
  return (
    <picture className={cx("block h-full w-full", className)}>
      <source type="image/webp" srcSet={photoSrcSet(photo)} sizes={sizes} />
      <img
        src={photoFallback(photo)}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        draggable={false}
        className={cx("h-full w-full object-cover", imgClassName)}
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    </picture>
  );
}
