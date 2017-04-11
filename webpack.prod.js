var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./config/webpack.common.js');
var path = require("path");

var srcPath = path.join(__dirname, "/demo"); 

var config = {
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules']
  },

  output: {
    path: srcPath,
    publicPath: '',
    filename: '[name].js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = webpackMerge(commonConfig, config);