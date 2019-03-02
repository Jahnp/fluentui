const path = require('path');
const resources = require('../../scripts/webpack/webpack-resources');

const BUNDLE_NAME = 'windows-theme';
const IS_PRODUCTION = process.argv.indexOf('--production') > -1;

module.exports = resources.createConfig(BUNDLE_NAME, IS_PRODUCTION, {
  entry: {
    [BUNDLE_NAME]: './lib/index.js'
  },

  output: {
    libraryTarget: 'var',
    library: 'FabricWindowsTheme'
  },

  resolve: {
    alias: {
      '@uifabric/windows-theme/src': path.join(__dirname, 'src'),
      '@uifabric/windows-theme/lib': path.join(__dirname, 'lib'),
      '@uifabric/windows-theme': path.join(__dirname, 'lib')
    }
  }
});
