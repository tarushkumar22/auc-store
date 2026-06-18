import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tarush.icu",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
