const cssnext = require('postcss-cssnext');
const precss = require('precss');
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/',
  },
  extensions: [
    "", ".js", ".jsx",
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  },
  postcss: function() {
    return [
      precss,
      cssnext
    ];
  }
}
