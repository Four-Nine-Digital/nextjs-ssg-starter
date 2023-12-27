/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ssg-next-github-page-starter',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
