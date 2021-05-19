const { DefinePlugin, ids } = require('webpack');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.config.js');
const config = require('../config/production.json');


const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

const hashedModuleIdsPlugin = new ids.HashedModuleIdsPlugin();

const compressionPlugin = new CompressionPlugin();


module.exports = merge(common, {
  mode: 'production',
  output: {
    clean: true,
  },
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              { targets: { browsers: 'last 2 versions' } },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
          ],
          plugins: [
            require.resolve('@babel/plugin-transform-runtime'),
            require.resolve('babel-plugin-relay'),
            [
              require.resolve('babel-plugin-formatjs'),
              { idInterpolationPattern: '[sha512:contenthash:base64:6]', ast: true },
            ],
          ],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [definePlugin, compressionPlugin, hashedModuleIdsPlugin],
  externals: {
    config: JSON.stringify(config),
  },
});
