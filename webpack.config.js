'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './src/joi-browser.js',
  output: {
    library: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'joi-browser.js'
  },
  node: {
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    // Since moment is now external, we can comment this out
    // but leaving it here in case we reverse that decision
    // english locale is included, exclude the rest
    // new webpack.IgnorePlugin(/locale/, /moment$/)
  ],
  externals: {
    "moment": "moment"
  }
};
