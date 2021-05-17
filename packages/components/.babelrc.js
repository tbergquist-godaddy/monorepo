module.exports = {
  presets: ['@adeira/babel-preset-adeira'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
      },
    ],
    '@vanilla-extract/babel-plugin'
  ],
};
