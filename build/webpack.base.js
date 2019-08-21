const path = require('path');
const os = require('os');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SizePlugin = require('size-plugin');
const chalk = require('chalk');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)?$/,
            use: "ts-loader",
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            test: /\.html$/,
            use: 'html-loader'
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: path.resolve(__dirname, "../dist/"),
                  hmr: process.env.NODE_ENV === 'development'
                }
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: path.resolve(__dirname, "../dist/"),
                  hmr: process.env.NODE_ENV === 'development'
                }
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true
                }
              }
            ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 10240,
                name: '[name].[ext]'
              }
            }
          },
          {
            test: /\.(eot|woff2?|ttf|svg)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[name]-[hash:5].min.[ext]",
                  limit: 5000, 
                  publicPath: path.resolve(__dirname, "../dist/fonts/"),
                  outputPath: path.resolve(__dirname, "../dist/fonts/")
                }
              }
            ]
          }
        ]
    },
    plugins: [
        new SizePlugin(),
        new ProgressBarPlugin({
          format: ' 构建中 [:bar] ' + chalk.blue.bold(':percent') + ' (用时 :elapsed seconds)'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false
        })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  };