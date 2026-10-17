import type { Photo } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a /public path with the deployment base path (needed for GitHub Pages sub-paths). */
export const asset = (path: string) => `${base}${path}`;

export const photoSrcSet = (p: Photo) =>
  [480, 960, 1600].map((w) => `${asset(`/images/${p.src}-${w}.webp`)} ${Math.min(w, p.width)}w`).join(", ");

export const photoFallback = (p: Photo) => asset(`/images/${p.src}.jpg`);

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
