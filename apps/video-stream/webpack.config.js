// @flow

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  target: 'electron-renderer',
  watch: true,
  externals: {
    electron: 'electron',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, 'src', 'index.html'),
        to: path.join(__dirname, 'dist', 'index.html'),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
    ],
  },
};
