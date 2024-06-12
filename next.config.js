/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === "development") {
  const { setupDevPlatform } = require("@cloudflare/next-on-pages/next-dev");
  setupDevPlatform();
}

const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig;
