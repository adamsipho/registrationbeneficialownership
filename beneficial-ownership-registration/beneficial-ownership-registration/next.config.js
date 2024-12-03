/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'], // Add any image domains you're using
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Add output: 'standalone' for improved performance
  output: 'standalone',
}

module.exports = nextConfig

