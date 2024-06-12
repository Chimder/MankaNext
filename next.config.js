/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
