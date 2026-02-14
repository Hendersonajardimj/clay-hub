/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bandcamp.com'
      }
    ]
  }
};

export default nextConfig;
