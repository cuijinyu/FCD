const merge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./webpack.base');

module.exports = merge.smart(base, {
    mode: 'production',
    entry: {
        fcd: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
        filename: '[name].js',
        publicPath: path.resolve(__dirname, '../dist/')
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "../public/index.html"),
            inject: 'head',
            title: 'fcd',
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true
    }
})