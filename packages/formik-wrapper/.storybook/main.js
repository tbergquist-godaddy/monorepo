const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y',
  ],
  webpackFinal: (config) => {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};
