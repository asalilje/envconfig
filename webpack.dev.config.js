var webpack = require('webpack');
var path = require('path');

var GLOBALS = {
  config: {
    apiUrl: JSON.stringify('./mock-swag.json')
  }
};

var config = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(css|less)$/, loader: "style!css?modules&importLoaders=1&sourceMap&localIdentName=test_[hash:base64:5]!less?sourceMap" }
    ]
  },
};

module.exports = config;
