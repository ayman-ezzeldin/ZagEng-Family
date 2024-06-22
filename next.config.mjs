/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js config options
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
};

module.exports = {
  ...nextConfig,
  eslint: {
    // Ignore ESLint for certain files during production builds
    ignoreDuringBuilds: true,
  },
};
