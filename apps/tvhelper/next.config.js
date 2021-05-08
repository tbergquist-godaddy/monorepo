// @flow

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'TRUE',
});
const { config } = require('dotenv');

config();

const { GRAPHQL_URL } = process.env;

module.exports = (withBundleAnalyzer({
  env: {
    GRAPHQL_URL,
  },
}) /*: Object */);
