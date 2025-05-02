import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // use /** to allow all paths under this domain
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/shadcn.png", // this allows only this specific path
      },
    ],
  },
};

export default nextConfig;
