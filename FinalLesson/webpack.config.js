const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: test } = require('node:test');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/app.js', //main js file
    output:{
        path: path.resolve(__dirname, 'public'), //location for file generation
        filename: 'app.js',
        clean: true //clean after new generation
    },
    module:{
        rules:[
            {   //transpiliavimui
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {   //compile scss to css
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html', //src html file
            filename: 'index.html' //public file name
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer:{
        static: './public', //main dir for serving
        port: 3002, //web server port
        open: true //start browser auto
    }

}