/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});
const { config } = require('dotenv');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

config();

const { GRAPHQL_URL } = process.env;

module.exports = withVanillaExtract(
  withBundleAnalyzer({
    images: {
      domains: ['static.tvmaze.com', 'image.tmdb.org'],
    },
    env: {
      GRAPHQL_URL,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
);
