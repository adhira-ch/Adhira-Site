import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: '', // No need for a base path when deploying directly to the branch
  assetPrefix: '', // Leave this empty as well
};

module.exports = nextConfig;