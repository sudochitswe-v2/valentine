import type { NextConfig } from 'next';

// Configuration for static export (for GitHub Pages deployment)
const nextConfigExport: NextConfig = {
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out', // Specify the output directory
  trailingSlash: true, // Add trailing slashes to URLs for GitHub Pages compatibility
  basePath: '/valentine', // Set the base path for GitHub Pages
  assetPrefix: '',
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media0.giphy.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfigExport;