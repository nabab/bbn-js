const glob = require('glob');

module.exports = {
  mode: 'development',
  entry: ['./nodejs/bbn.js', './nodejs/bbn.less'],
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
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      }
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'bbn.js',
  }
};