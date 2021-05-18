const setupDevBundler = require('../configuration/bundler/setupDevBundler');
const baseConfig = require('./webpack.config.js');
const config = require('../config/development.json');

module.exports = setupDevBundler({
  baseConfig,
  externals: {
    config: JSON.stringify(config),
  },
});
