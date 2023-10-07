import path from 'path';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;
import webpack from 'webpack';

export default {
    mode: "development",
    // Entry file(s)
    entry: './src/index.ts',

    // Output configuration
    output: {
        path: __dirname  + 'dist',
        filename: 'bundle-webpack.js',
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
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            __dirname + 'src',
            'node_modules'
        ]
    },

    // Plugins (if you have any)
    plugins: [
      new webpack.DefinePlugin({
        IS_TESTING: JSON.stringify(process.env.IS_TESTING)
      })
    ],
    externals: {
        "axios": "axios",
        "dayjs": "dayjs"
    },

    // Optional: Development server configuration
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     compress: true,
    //     port: 9000
    // },

    // Optional: Source maps for development
    devtool: 'source-map',
};

