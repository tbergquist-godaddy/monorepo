var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR  = path.resolve(__dirname, 'src/client/public');
var APP_DIR    = path.resolve(__dirname, 'src/client/app');
var extractCSS = new ExtractTextPlugin('styles.css', {
  allChunks : true
});

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/App.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: ""
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractCSS,
    new HtmlWebpackPlugin({
      title: 'tut1',
      template: APP_DIR + '/index.html'
    })
  ],
  devServer: {
    hot: true,
    contentBase: './src/client/public',
    historyApiFallback: true
  }
};

module.exports = config;