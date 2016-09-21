var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

var config = {
  cache: true,
  
  entry: {
    demo: './src/main.js',
    component: ['./src/Slideshow.js']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  eslint: {
    configFile: './.eslintrc.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader',
          'autoprefixer-loader?{browsers: ["last 2 versions", "> 1%", "ie 9", "firefox >= 21", "safari >= 5"], cascade: false}'
        ].join('!'))
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  postcss: [
    require('postcss-custom-properties'),
    require('postcss-calc')
  ],

  plugins: [
    new CleanPlugin(['dist/**/*.*']),
    new CopyPlugin([
      { from: 'src/index.html' },
      { from: 'src/favicon.ico' },
      { from: 'src/img.png' },
      { from: 'src/img1.png' }
    ]),
    new ExtractTextPlugin('[name].css')
  ]
};

module.exports = config;
