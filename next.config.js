/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Required if using next/image
};

module.exports = nextConfig;
