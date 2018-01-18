const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                     test: /\.css$/,
                     use: [
                       'style-loader',
                       'css-loader'
                     ]
                   },
            {
            test: /\.scss$/,
            use: [
                { loader: "style-loader" }, 
                { loader: "css-loader" }, 
                { loader: "sass-loader" }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            exclude: /node_modules/,
            loader: 'file-loader'        
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};