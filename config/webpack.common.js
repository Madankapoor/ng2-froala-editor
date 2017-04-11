var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");
var path = require("path");
var srcPath = path.join(__dirname, "/demo");

var config = {
  entry: {
    "polyfills": "./src/polyfills.ts",
    "vendor": "./src/vendor.ts",
    "app": "./src/app.ts"
  },
  output: {
    path: srcPath,
    publicPath: '',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loaders: ['ts-loader', 'angular2-template-loader'],
      exclude: ["/node_modules/"]
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      exclude: helpers.root('src', 'app'),
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    }, {
      test: /\.css$/,
      include: helpers.root('src', 'app'),
      loader: 'raw'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      // /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      /angular(\\|\/)core(\\|\/)@angular/,
      __dirname + "./src" // location of your src
    )
  ]
};

module.exports = config;