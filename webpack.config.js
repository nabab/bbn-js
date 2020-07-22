const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = [{
  mode: 'development',
  entry: './nodejs/bbn.js',
  output: {
    libraryTarget: 'commonjs',
    filename: 'bbn.js',
  }
}, {
  mode: 'development',
  entry: createLessEntryPoints(),
  plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin({filename: '[name].css'})],
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ],
  }
}];

function createLessEntryPoints() {
  const lessFiles = glob.sync('./nodejs/css/**/*.less');

  const lessEntryPoints = {};
  lessFiles.forEach(file => {
    const basename = path.basename(file);
    const filenameWithoutExtension = path.parse(basename).name;
    lessEntryPoints[filenameWithoutExtension] = file;
  });
  return lessEntryPoints;
}