/** @type {import('next').NextConfig} */
nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['server'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
}

module.exports = nextConfig;