/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bandcamp.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'sample-videos.com'
      },
      {
        protocol: 'https',
        hostname: 'commondatastorage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com'
      },
      {
        protocol: 'https',
        hostname: 'player.twitch.tv'
      }
    ]
  }
};

export default nextConfig;
