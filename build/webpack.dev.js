const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.base');

module.exports = merge.smart(base, {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    entry: {
        fcd: path.resolve(__dirname, "../src/index.tsx")
    },
    output: {
        filename: '[name].js'
    },
    devServer: {
        compress: true,
        hot: true,
        overlay: true,
        stats: "errors-only",
        liveReload: true,
        inline: true,
        disableHostCheck:true,
        historyApiFallback:true,
        port: 8088,
        open: true,
        watchOptions: {
            ignored: /node_modules/
        }
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
        })
    ]
})