// @flow

const withTM = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');
const withCSS = require('@zeit/next-css');
const { findMonorepoRoot } = require('@adeira/monorepo-utils');

module.exports = (withCSS(
  withCustomBabelConfigFile(
    withTM(['@tbergq'])({
      babelConfigFile: path.join(findMonorepoRoot(), 'babel.config.js'),
      target: 'serverless',
    }),
  ),
) /*: Object */);
