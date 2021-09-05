/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});
const { config } = require('dotenv');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { getGlobalCssLoader } = require('next/dist/build/webpack/config/blocks/css/loaders');

config();

const { GRAPHQL_URL } = process.env;

function withVanillaExtract() {
  return (nextConfig = {}) => {
    return {
      ...nextConfig,

      webpack(config, options) {
        const { dev, isServer } = options;

        config.module.rules[config.module.rules.length - 1].oneOf.unshift({
          test: /\.vanilla\.css$/i,
          sideEffects: true,
          use: getGlobalCssLoader(
            {
              assetPrefix: config.assetPrefix,
              isClient: !isServer,
              isServer,
              isDevelopment: dev,
            },
            [],
            [],
          ),
        });

        config.plugins.push(new VanillaExtractPlugin());

        return config;
      },
    };
  };
}

module.exports = withVanillaExtract()(
  withBundleAnalyzer({
    images: {
      domains: ['static.tvmaze.com'],
    },
    env: {
      GRAPHQL_URL,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
);
