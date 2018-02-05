/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');


module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devtool: '#source-map',
    devServer: {
        disableHostCheck: true //开启局域网外部可访问
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     filename: path.join(__dirname, '../examples/dist/index.html'),
        //     template: path.join(__dirname, '../examples/index.html')
        // }),
    ]
});
