// @flow

const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const path = require('path');
const withCSS = require('@zeit/next-css');
const { findMonorepoRoot } = require('@adeira/monorepo-utils');

module.exports = (withCSS(
  withCustomBabelConfigFile({
    babelConfigFile: path.join(findMonorepoRoot(), 'babel.config.js'),
  }),
) /*: Object */);
