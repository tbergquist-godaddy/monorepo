// @flow

module.exports = {
  presets: ['@adeira/babel-preset-adeira', 'next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      "react-native-web",
      {
        "commonjs": true
      }
    ],
    'relay',
  ],
};
