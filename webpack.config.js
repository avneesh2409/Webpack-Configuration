//var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.join(__dirname);

var config = {
    entry: [path.join(APP_DIR, 'src', 'index.js')],
    output: {
        path: BUILD_DIR,
        publicPath: "/",
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                            plugins: ['babel-plugin-transform-object-rest-spread'],
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
             ],
        },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: [
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
        open: true,
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        }
    },
    devtool: 'source-map'
};
module.exports = config;