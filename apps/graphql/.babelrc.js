const alias = require('./alias');

module.exports = {
  presets: ['@adeira/babel-preset-adeira', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias,
      },
    ],
  ],
};
