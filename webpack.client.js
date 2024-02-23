const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/client/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(process.cwd(), 'client_build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
});
