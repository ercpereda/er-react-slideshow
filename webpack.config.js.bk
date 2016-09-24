var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

var config = {
  cache: true,
  
  entry: './src/Slideshow.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'er-react-slideshow.js',
    libraryTarget: 'commonjs'
  },

  target: 'node',

  externals: {
    'react': 'react',
    'classnames': 'classnames'
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
    ]),
    new ExtractTextPlugin('er-react-slideshow.css')
  ]
};

module.exports = config;
