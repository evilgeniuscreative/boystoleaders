import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  
  // Set up App Router (no longer experimental in Next.js 13+)
  
  // Enable SASS support
  sassOptions: {
    includePaths: ['./frontend/scss'],
  },
  
  // Ensure Next.js can find your pages and components
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
