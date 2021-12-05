// @flow

const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config /* :$FlowFixMe */) /* :$FlowFixMe */ => {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};
