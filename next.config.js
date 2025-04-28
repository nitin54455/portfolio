/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-photo.jpg'], // Add this if you're using external image URLs
  },
}

module.exports = nextConfig
