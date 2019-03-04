const webpack = require('webpack');
const path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: __dirname + '/client/js/index.jsx',
  output: {
    path: __dirname + 'python_react_pkg/static/dist',
    filename: 'bundle.js',
    publicPath: '/static/dist'
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "client")
    ],
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets:['es2015','react']
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilenmae: "[id].css"
    })
  ],
};

module.exports = config;
