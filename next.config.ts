import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://github.com/NurAlam123/**"),
      new URL("https://i.pinimg.com/**"),
      new URL("https://i.scdn.co/image/**"),
    ],
  },
};

export default nextConfig;
