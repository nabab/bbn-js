import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup'; // Optional, for better typing support

const __dirname = new URL('.', import.meta.url).pathname;
export default defineConfig({
    input: 'dist/index.js', // equivalent to Webpack's entry
    output: {
        file: path.resolve(__dirname, 'dist/bbn.js'), // Output file path
        format: 'iife', // 'global' type in Webpack maps to IIFE in Rollup which attaches to window
        name: 'bbn', // The global variable name, note that multiple names aren't typical in Rollup
        sourcemap: true, // Equivalent to Webpack's devtool: 'source-map',
        inlineDynamicImports: true,
        exports: 'named'
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: ['.js', '.ts'], // Handle TypeScript files
        }),
        commonjs(), // Convert CommonJS modules to ES6
        typescript({ // TypeScript support
            tsconfig: './tsconfig.json' // Point to your tsconfig file
        }),
        json(), // To import JSON files
        replace({
            'process.env.IS_TESTING': JSON.stringify(process.env.IS_TESTING),
            preventAssignment: true
        }),
        terser(), // Minify the output (optional)
    ]
});
