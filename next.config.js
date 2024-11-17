/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/jsx-runtime": require.resolve("react/jsx-runtime"),
    };
    return config;
  },
};

module.exports = nextConfig;
