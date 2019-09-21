// @flow

const withTM = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');

module.exports = withCustomBabelConfigFile(
  withTM({
    babelConfigFile: path.join(__dirname, '.babelrc.js'),
    target: 'serverless',
    transpileModules: ['react-native-web', '@tbergq'],
    webpack: config => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
      };

      config.resolve.extensions = [...config.resolve.extensions, '.web.js', '.js'];

      return config;
    },
  }),
);
