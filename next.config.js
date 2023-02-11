/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
