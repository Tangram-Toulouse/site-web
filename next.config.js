/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  images: {
    unoptimized: true, // Nécessaire pour les images lors d'un export statique
  },
}

module.exports = nextConfig
