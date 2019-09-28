// @flow

const withTM = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withCustomBabelConfigFile(
    withTM({
      babelConfigFile: path.join(__dirname, '.babelrc.js'),
      target: 'serverless',
      transpileModules: ['@tbergq', 'react-native-read-more-text', 'react-native-safe-area-view'],
      webpack: (config, { isServer }) => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
        };

        // Originally, Next.js extensions contains also JSX and WASM
        config.resolve.extensions = isServer
          ? ['.web.js', '.js', '.mjs', '.json']
          : ['.mjs', '.web.js', '.js', '.json'];

        return config;
      },
    }),
  ),
);
