import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/dreaming-of-op_cat',
        destination: '/blog/dreaming-of-op-cat',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
