const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin();

module.exports = {
  context: path.join(__dirname, 'public/js'),
  entry: {
    index: './index.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(\/|\\)(?!(@feathersjs|debug))/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  plugins: [htmlPlugin]
};
