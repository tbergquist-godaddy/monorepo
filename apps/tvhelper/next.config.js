// @flow

const withTM = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');

module.exports = withCustomBabelConfigFile(
  withTM({
    babelConfigFile: path.join(__dirname, '.babelrc'),
    target: 'serverless',
    transpileModules: [
      '@tbergq/tvhelper-relay',
      '@tbergq/tvhelper-components',
      '@tbergq/tvhelper-utils',
    ],
  }),
);
