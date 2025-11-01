import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 enables static export (you already had this)
  images: {
    unoptimized: true, // 👈 this line fixes the Image Optimization error
  },
};

export default nextConfig;
