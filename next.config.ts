import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "*.s3.us-east-2.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "*"
      }
    ]
  }
};

export default nextConfig;
