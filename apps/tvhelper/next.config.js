// @flow

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});
const { config } = require('dotenv');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { getGlobalCssLoader } = require('next/dist/build/webpack/config/blocks/css/loaders');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config();

const { GRAPHQL_URL } = process.env;

function withVanillaExtract(pluginOptions = {}) {
  /**
   * @param {any} nextConfig Custom config for Next.js
   */
  return (nextConfig = {}) => {
    return {
      // For Webpack 4, you'll need to install it seperately
      ...nextConfig,

      webpack(config, options) {
        const { dev, isServer } = options;

        config.module.rules.push({
          test: /\.css$/i,
          sideEffects: true,
          use: dev
            ? getGlobalCssLoader(
                {
                  assetPrefix: options.config.assetPrefix,
                  future: {
                    webpack5: true,
                  },
                  isClient: !isServer,
                  isServer,
                  isDevelopment: dev,
                },
                [],
                [],
              )
            : [MiniCssExtractPlugin.loader, 'css-loader'],
        });

        const plugins = [];

        plugins.push(new VanillaExtractPlugin(pluginOptions));

        if (!dev) {
          plugins.push(
            new MiniCssExtractPlugin({
              filename: 'static/css/[contenthash].css',
              chunkFilename: 'static/css/[contenthash].css',
              ignoreOrder: true,
            }),
          );
        }

        config.plugins.push(...plugins);

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    };
  };
}

module.exports = (withVanillaExtract()(
  withBundleAnalyzer({
    future: {
      webpack5: true,
    },
    images: {
      domains: ['static.tvmaze.com'],
    },
    env: {
      GRAPHQL_URL,
    },
  }),
) /*: Object  */);
