// @flow

const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withCustomBabelConfigFile({
    babelConfigFile: path.join(__dirname, '.babelrc.js'),
  }),
);
