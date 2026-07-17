import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',	
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default config;
