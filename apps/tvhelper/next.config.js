// @flow

const withTM = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});

module.exports = (withBundleAnalyzer(
  withCSS(
    withCustomBabelConfigFile(
      withTM(['@tbergq'])({
        babelConfigFile: path.join(__dirname, '.babelrc.js'),
        target: 'serverless',
      }),
    ),
  ),
) /*: Object */);
