/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withPlugins = require('next-compose-plugins');

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withPlugins([withBundleAnalyzer, withVanillaExtract], {
  images: {
    domains: ['static.tvmaze.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
