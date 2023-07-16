/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  experimental: {
    serverActions: true
  },
}

module.exports = nextConfig
