/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'standalone',
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ma6-main.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
