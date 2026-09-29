/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

// Removed 2026-09-29: the case studies claimed client results that could not be verified, and the location pages
// carried unverified local figures. Their URLs go to the matching pages on councilfire.org.
nextConfig.redirects = async () => [
  { source: '/case-studies', destination: 'https://www.councilfire.org/work', permanent: true },
  { source: '/case-studies/:slug*', destination: 'https://www.councilfire.org/work', permanent: true },
  { source: '/locations', destination: 'https://www.councilfire.org/climate-resilience', permanent: true },
  { source: '/locations/:slug*', destination: 'https://www.councilfire.org/climate-resilience', permanent: true },
];

module.exports = nextConfig;
