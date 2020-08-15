const glob = require('glob');
const path = require('path');

module.exports = [{
  mode: 'development',
  entry: './nodejs/bbn.js',
  output: {
    libraryTarget: 'commonjs',
    filename: 'bbn.js',
  }
}];
