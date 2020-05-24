// @flow

const withTM = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');
const withCSS = require('@zeit/next-css');
const { findMonorepoRoot } = require('@adeira/monorepo-utils');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});
const { config } = require('dotenv');

config();

const { GRAPHQL_URL } = process.env;

module.exports = (withBundleAnalyzer(
  withCSS(
    withCustomBabelConfigFile(
      withTM(['@tbergq'])({
        babelConfigFile: path.join(findMonorepoRoot(), 'babel.config.js'),
        env: {
          GRAPHQL_URL,
        },
      }),
    ),
  ),
) /*: Object */);
