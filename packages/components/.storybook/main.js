// @flow

const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config /* :$FlowFixMe */) /* :$FlowFixMe */ => {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};
