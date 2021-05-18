const setupProdBundler = require('../configuration/bundler/setupProdBundler');
const config = require('../config/production.json');
const baseConfig = require('./webpack.config.js');

module.exports = setupProdBundler({
  baseConfig,
  externals: {
    config: JSON.stringify(config),
  },
});
