const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/server/index.tsx',
    target: 'node',
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'server_build'),
    },
    resolve: {
    // fallback: {
    //   fs: false,
    //   async_hooks: false,
    //   net: false,
    // },
    },
    externals: [nodeExternals()], // 以忽略节点\模块文件夹中的所有模块
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['isomorphic-style-loader', 'css-loader']
            },
        ],
    },
    // plugins: [new NodePolyfillPlugin()],
});
