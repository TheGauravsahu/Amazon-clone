/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'm.media-amazon.com',
            },
            {
              protocol: 'https',
              hostname: 'cdn.dummyjson.com',
            },
          ],
        },
};

export default nextConfig;
