/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ["img.seadn.io"],
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
