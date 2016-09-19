var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');
//自动添加css浏览器前缀
var autoprefixer = require('autoprefixer');
//提取css
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //入口文件
    entry: helpers.getEntry(),

    //输出文件
    output: {
        path: path.join(__dirname, '/dist'),
        //被列在entry中，需要被打包出来的文件命名配置
        filename: 'js/[name].js',
        //使webpack支持分片thunks
        //未被列在entry中，需要被打包出来的文件命名配置
        chunkFilename: 'js/[name].js'
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
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            { 
                test: /\.scss$/, 
                //提取公共scss
                //loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!postcss-loader")
                loader: 'style-loader!css-loader!sass-loader!postcss-loader'
            },
            { 
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=1000&name=images/[name].[ext]',
                //添加引用版本号
                query:"v="+new Date().getTime()
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=1000&name=images/[name].[ext]',
                //添加引用版本号
                query:"v="+new Date().getTime()
            }
        ]      
    },
    //postcss配置
    postcss: function () {
        return [autoprefixer]
    },
    //插件项
    plugins: [
       
    ]
}
