var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
    //入口文件
    entry: helpers.getEntry(),

    //输出文件
    output: {
        path: path.join(__dirname, '/dist'),
        //热更新资源存放目录
        //publicPath:'/',
        filename: 'js/[name].js',
    },

    resolve: {
        //定义模块缩写名称
        alias: {
            'common.scss':path.join(__dirname,'/src/assets/scss/common.scss')
        },
        //resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.css', '.scss']
    },
    
    module: {
        //加载器配置
        loaders: [
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { 
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=1000&name=images/[name].[ext]',
                query:{}
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                  limit: 10000,
                  name: 'fonts/[name].[ext]'
                }
            }
        ]      
    },
    //插件项
    plugins: [
       
    ]
}
