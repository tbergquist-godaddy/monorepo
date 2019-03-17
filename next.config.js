// @flow

const withTM = require('next-plugin-transpile-modules');

module.exports = withTM({
  transpileModules: ['@tbergq/tvhelper-relay', '@tbergq/tvhelper-components'],
});
