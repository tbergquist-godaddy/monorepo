// @flow

const plugins = [
  ['styled-components', { ssr: true }],
  'relay',
  '@babel/plugin-proposal-class-properties',
  '@kiwicom/orbit-components'
];

const prodAndDev = {
  presets:  ['next/babel', ['@adeira/babel-preset-adeira', { target: 'js-esm' }]],
  plugins,
};
module.exports = {
  env: {
    production: prodAndDev,
    development: prodAndDev,
    test: {
      presets: ['@adeira/babel-preset-adeira', 'next/babel'],
      plugins,
    },
  },
};

