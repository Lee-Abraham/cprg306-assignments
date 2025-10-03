/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Offloads Webpack to a separate thread to reduce memory usage
    webpackBuildWorker: true
  },
  // Optional: disable Turbopack in production if it's causing issues
  turbo: {
    enabled: false
  }
};

export default nextConfig;