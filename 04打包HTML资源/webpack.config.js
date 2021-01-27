/*
    loader: 1. 下载 2. 使用（配置loader）
    plugins： 1. 下载 2. 引入 3.使用

*/
// node 内置核心模块，用来处理路径问题
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './built.js',
        path: resolve(__dirname, 'bulid')
    },
    module: {
        rules: [
            {

            },
        ]
    },
    // plugins的配置
    plugins: [
        // 详细plugins的配置
        // html-webpack-pligin
        // 功能：默认会创建一个空的html， 自动引入打包输出的所有资源（js/css）
        // 需求： 需要有结构的html文件
        new HtmlWebpackPlugin({
            // 复制'./src/index.html'文件, 并自动引入打包输出所有的资源（js/css）
            template: './src/index.html'
        }
        )
    ],
    // 模式
    mode: 'development'
    // mode: 'production'

};
