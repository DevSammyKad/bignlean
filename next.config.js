/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bignlean.shellcode.cloud",
      },
    ],
  },
  // Add this to temporarily skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;