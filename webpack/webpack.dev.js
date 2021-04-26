const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const common = require('./webpack.config.js');
const config = require('../config/development.json');


const defaultPort = 3000;


const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
  eslint: {
    files: './src/**/*.{ts,tsx,js,jsx}',
  },
});

const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false,
});

const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
});

const eSLintPlugin = new ESLintPlugin();


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
              ],
              [
                '@babel/preset-typescript',
                { options: { configFile: 'tsconfig.dev.json' } },
              ],
              [
                '@babel/preset-react',
                { runtime: 'automatic' },
              ],
            ],
            plugins: [
              require.resolve('react-refresh/babel'),
              [
                require.resolve('babel-plugin-formatjs'),
                { idInterpolationPattern: '[sha512:contenthash:base64:6]', ast: true },
              ],
            ],
          },
        }],
      },
    ],
  },
  plugins: [
    forkTsCheckerWebpackPlugin,
    reactRefreshWebpackPlugin,
    bundleAnalyzerPlugin,
    definePlugin,
    eSLintPlugin,
  ],
  devServer: {
    disableHostCheck: true,
    port: process.env.PORT || defaultPort,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
    historyApiFallback: true,
    clientLogLevel: 'none',
    hot: true,
  },
  externals: {
    config: JSON.stringify(config),
  },
});
