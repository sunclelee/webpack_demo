// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/build",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "env","react"
              ]
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader",
             options:{
               modules: true ,// 指定启用css modules
               localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式             
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      })
    ]
  }