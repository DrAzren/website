/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static export: `npm run build` produces a fully static site in /out
  // that can be hosted anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages, cPanel…).
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
