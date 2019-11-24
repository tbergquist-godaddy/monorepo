// @flow

module.exports = {
  presets: ['@adeira/babel-preset-adeira', 'next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    'relay',
    '@babel/plugin-proposal-class-properties',
  ],
};
