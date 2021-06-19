/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

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
  return (nextConfig = {}) => {
    return {
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
                  isClient: !isServer,
                  isServer,
                  isDevelopment: dev,
                },
                ['autoprefixer'],
                [],
              )
            : [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [require('autoprefixer')],
                  },
                },
              ],
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

module.exports = withVanillaExtract()(
  withBundleAnalyzer({
    images: {
      domains: ['static.tvmaze.com'],
    },
    env: {
      GRAPHQL_URL,
    },
  }),
);
