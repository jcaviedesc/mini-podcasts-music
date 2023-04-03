/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.mzstatic.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
