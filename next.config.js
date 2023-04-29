/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com']
  },
  experiments: { 
    topLevelAwait: true 
  }
}

module.exports = nextConfig;
