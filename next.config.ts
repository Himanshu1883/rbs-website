import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 800, 1280, 1920],
    imageSizes: [96, 128, 256, 340, 384, 640],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
