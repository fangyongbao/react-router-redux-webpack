var glob = require('glob');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getHtmlPlugin() {
    var buildPath = '';
    var plugins = [];
    glob.sync('./*.html').forEach(function (name) {
        //[^/]不匹配这个集合中的任何一个字符 
        var n = name.match(/([^/]+)\.html/)[1];
        plugins.push(
            new HtmlWebpackPlugin({
                filename:buildPath+n+'.html',
                template:name,
                inject:false
            })
        )
    });
    return plugins;
}

function getEntry() {
    var entry = {};
    glob.sync('./entry/*.js').forEach(function (name) {
        console.log(name);
        //[^/]不匹配这个集合中的任何一个字符 
        var n = name.match(/([^/]+)\.js/)[1];
        entry[n] = name;
    });
    return entry;
};

exports.getHtmlPlugin = getHtmlPlugin;
exports.getEntry = getEntry;