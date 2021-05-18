const path = require('path');
const setupBaseConfig = require('../configuration/bundler/setupBaseConfig');

module.exports = setupBaseConfig({
  entry: './src/index',
  outputPath: path.resolve(__dirname, '..', 'dist'),
  template: './public/index.ejs',
  favicon: './public/favicon.ico',
});
