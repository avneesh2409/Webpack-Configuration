var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var webpack = require('webpack');
// var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.join(__dirname);

var config = {
    entry: [path.join(APP_DIR,'src','index.js')],
    output: {
      path: BUILD_DIR,
      publicPath: "/",
      filename: 'js/bundle.js'
    },
    module : {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude:/node_modules/,
                use:[
                    {
                      loader: 'file-loader',
                    },
                ]
            }
        ]      
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        port: 9002,
        onListening: function(server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
          }
    }
  };
  module.exports = config;