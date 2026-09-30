import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estatico: `next build` genera la carpeta out/ que sirve nginx.
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 1080, 1600],
    imageSizes: [320],
  },
};

export default nextConfig;
