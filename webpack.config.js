const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            /*
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            // */
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
            // {
            //     test: /\.svg$/,
            //     loader: 'raw-loader'
            // },
            //
            // {
            //     test: /\.svg$/,
            //     use: [
            //         {
            //             loader: "babel-loader"
            //         },
            //         {
            //             loader: "react-svg-loader",
            //             options: {
            //                 jsx: true // true outputs JSX tags
            //             }
            //         }
            //     ]
            // },

            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*','.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        // publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/",
        hotOnly: true
    },
    plugins: [
        // will generate html file inside dist folder including bundle with <src>
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};

