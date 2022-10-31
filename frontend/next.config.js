/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENV: process.env.NODE_ENV
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone'
}

module.exports = nextConfig
