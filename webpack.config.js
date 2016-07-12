var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./config/helpers");
var path = require("path");

var production = -1 < process.argv.indexOf('--dist');
var outPath = production ? 'dist' : 'build';
var devtool = production ? 'source-map' : 'eval-source-map';

var config = {
  entry: {
    "polyfills": "./src/polyfills.ts",
    "vendor": "./src/vendor.ts",
    "app": "./src/app.ts"
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: path.join(__dirname, "demo", outPath),
    publicPath: '',
    filename: '[name].js',
    pathInfo: true
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts-loader', 'angular2-template-loader'],
      exclude: ["/node_modules/"]
    }, {
      test: /\.html$/,
      loader: 'html'
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
    })
  ],
  debug: true,
  devtool: devtool
};

if (production) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: false
  }));
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
}

module.exports = config;