/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cf.shopee.com.my"],
  },
};

module.exports = nextConfig;
