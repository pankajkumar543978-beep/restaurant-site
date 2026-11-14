/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  env: {
    NEXT_PROD_SITE_URL: process.env.NEXT_PROD_SITE_URL,
    NEXT_PROD_GOOGLE_MAPS_URL: process.env.NEXT_PROD_GOOGLE_MAPS_URL,
    NEXT_PROD_GOOGLE_MAPS_EMBED_URL: process.env.NEXT_PROD_GOOGLE_MAPS_EMBED_URL,
    NEXT_PROD_RESTAURANT_PHONE: process.env.NEXT_PROD_RESTAURANT_PHONE,
    NEXT_PROD_RESTAURANT_FORMATTED_PHONE: process.env.NEXT_PROD_RESTAURANT_FORMATTED_PHONE,
    NEXT_PROD_RESTAURANT_EMAIL: process.env.NEXT_PROD_RESTAURANT_EMAIL,
    NEXT_PROD_INSTAGRAM_URL: process.env.NEXT_PROD_INSTAGRAM_URL,
    NEXT_PROD_FACEBOOK_URL: process.env.NEXT_PROD_FACEBOOK_URL,
    NEXT_PROD_FACEBOOK_ACTIVE: process.env.NEXT_PROD_FACEBOOK_ACTIVE,
  },
};

export default nextConfig;
