import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "m.media-amazon.com"
    ]
  }
};

export default nextConfig;
