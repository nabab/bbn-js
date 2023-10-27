import { URL } from 'url'; // in Browser, the URL in native accessible on window
const __dirname = new URL('.', import.meta.url).pathname;

var config = {};

function generateConfig(name) {
  var compress = name.indexOf('min') > -1;
  var config = {
    entry: './index.ts',
    output: {
      path: __dirname + '/dist/',
      filename: name + '.js',
      sourceMapFilename: name + '.map',
      library: 'bbn',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    node: false,
    devtool: 'source-map',
    mode: compress ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
  };
  return config;
}

['bbn', 'bbn.min'].forEach(function (key) {
  config[key] = generateConfig(key);
});

export default config;




/*
import path from 'path';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;
import webpack from 'webpack';

export default {
    mode: "development",
    // Entry file(s)
    entry: './dist/index.js',

    // Output configuration
    output: {
        path: __dirname  + 'dist',
        filename: 'bbn.js',
        library: {
            name: 'bbn',
            type: 'global'
        },
    },

    // Set up loaders
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    // Resolve extensions and modules
    resolve: {
        extensions: ['.js'],
        modules: [
            __dirname + 'dist',
            'node_modules'
        ]
    },

    // Plugins (if you have any)
    plugins: [
      new webpack.DefinePlugin({
        IS_TESTING: JSON.stringify(process.env.IS_TESTING)
      })
    ],
    // Optional: Development server configuration
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     compress: true,
    //     port: 9000
    // },

    // Optional: Source maps for development
    devtool: 'source-map',
};

*/