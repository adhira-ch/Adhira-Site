import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server mode for Vercel API routes (Gemini chat). Remove static export.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.lorem.space" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
