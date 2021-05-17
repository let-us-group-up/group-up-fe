const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');


const htmlPlugin = new HtmlWebPackPlugin({
  filename: 'index.html',
  template: './public/index.ejs',
  favicon: './public/favicon.ico',
});


module.exports = {
  entry: path.join(__dirname, '..', './src/index'),
  output: {
    filename: 'js/[name].[fullhash].js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
    path: path.join(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/image/[name].[contenthash].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@formatjs/icu-messageformat-parser':
        '@formatjs/icu-messageformat-parser/no-parser',
    },
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [htmlPlugin],
};
