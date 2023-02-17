/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**",
      },
    ],
    domains: ["image.tmdb.org", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
// https://image.tmdb.org/t/p/w500/
