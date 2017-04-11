var webpack = require("webpack");
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./config/helpers");
var path = require("path");

var commonConfig = require('./config/webpack.common.js');

var config = {
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules']
  },
  devtool: "source-map"
};

module.exports = webpackMerge(commonConfig, config);