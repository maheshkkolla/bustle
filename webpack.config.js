var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var fs = require('fs');

var config = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    },
    target: "web",
    watch: true
};

var htmlEntries = fs.readdirSync('src/html').map(function(e) {
    var entry = e.split('.')[0];
    return new HtmlWebpackPlugin({
        filename: "html/" + entry + ".html",
        template: "src/html/" + entry + ".html"
    })
});

htmlEntries.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
}));

var htmlConfig = Object.assign({}, config, {
    name: "HTML",
    output: {
        path: __dirname + '/dist'
    },
    plugins: htmlEntries,
});

// var cssEntries = {};
// fs.readdirSync('src/css').forEach(function(e) {
//     var entry = e.split('.')[0];
//     cssEntries[entry] = "./src/css/" + entry + ".scss"
// });
//
// var cssConfig = Object.assign({}, config, {
//    name: 'CSS',
//     entry: cssEntries,
//     output: {
//         filename: '[name].css',
//         path: __dirname + '/dist/css'
//     },
//     module: {
//         rules: [{
//             test: /\.(css|scss)/,
//             use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
//         }],
//         rules: [{
//             test: /\.scss$/,
//             use: [
//                 "style-loader",
//                 "css-loader",
//                 "sass-loader"
//             ]
//         }]
//     }
// });

var jsEntries = {};
fs.readdirSync('src/js').forEach(function(e) {
    var entry = e.split('.')[0];
    jsEntries[entry] = "./src/js/" + entry + ".js"
});

var jsConfig = Object.assign({}, config, {
    name: "JS",
    entry: jsEntries,
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
});

module.exports = [jsConfig, htmlConfig];
