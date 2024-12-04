import type { NextConfig } from "next";

require('dotenv').config();

const nextConfig: NextConfig = {
  images: {
    domains: ['static.nike.com'], // Add allowed image domains here
  },
};

export default nextConfig;
