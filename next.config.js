// @flow

const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [
    '@tbergq/tvhelper-relay',
    '@tbergq/tvhelper-components',
    '@tbergq/tvhelper-utils',
  ],
});
