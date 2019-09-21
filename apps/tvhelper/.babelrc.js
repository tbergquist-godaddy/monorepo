// @flow

module.exports = {
  presets: ['@kiwicom/babel-preset-kiwicom', 'next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    'relay',
    'react-native-web',
    '@babel/plugin-proposal-class-properties',
  ],
};
