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
      transpileModules: ['react-native-web', '@tbergq', 'react-native-read-more-text'],
      webpack: config => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
        };

        config.resolve.extensions = [...config.resolve.extensions, '.web.js', '.js'];

        return config;
      },
    }),
  ),
);
