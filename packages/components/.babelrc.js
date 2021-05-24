module.exports = {
  presets: ['@adeira/babel-preset-adeira', '@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
      },
    ],
    '@vanilla-extract/babel-plugin',
  ],
};
