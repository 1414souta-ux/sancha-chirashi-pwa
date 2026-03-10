import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sancha-chirashi-pwa',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
