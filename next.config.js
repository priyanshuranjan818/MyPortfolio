/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyPortfolio',
  assetPrefix: '/MyPortfolio/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
