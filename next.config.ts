import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/dashboard' ,
        permanent: true, // 308 redirect
      
      }
    ];
  },
};

export default nextConfig;
