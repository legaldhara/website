/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
});

module.exports = nextConfig;
