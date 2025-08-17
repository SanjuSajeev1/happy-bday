/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource",
    });
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|m4a)$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
