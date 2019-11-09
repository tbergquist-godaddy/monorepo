// @flow

module.exports = {
  presets: ['@adeira/babel-preset-adeira', 'next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    'relay',
    [
      "react-native-web",
      {
        "commonjs": true
      }
    ],
    '@babel/plugin-proposal-class-properties',
  ],
};
