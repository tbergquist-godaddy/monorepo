// @flow

module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
    'relay',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
        },
      },
    ],
  ],
};
