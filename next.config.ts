import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://github.com/NurAlam123/**")],
  },
};

export default nextConfig;
