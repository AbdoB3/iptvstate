import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    images: {
      domains: ['res.cloudinary.com'],
    },
};

export default withNextIntl(nextConfig);