const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackBar = require('webpackbar');

require('dotenv').config();
const port = process.env.PORT || 3000;

module.exports = (_, { mode }) => ({
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
    pathinfo: false
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            include: path.resolve(__dirname, 'src'),
            use: [
                {
                    loader: 'ts-loader',
                    options: {transpileOnly: mode === 'development'}
                },
                {
                    loader: 'tslint-loader'
                },
            ],
        },
        {
            test: /\.html$/,
            include: path.resolve(__dirname, 'public'),
            use: 'html-loader',
        },

        {
            test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"}
            ]
        }


    ],
  },
  devServer: { historyApiFallback: true, open: true, port },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  plugins: [
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'public/favicon.ico'),
        from: path.resolve(__dirname, 'public/logo.png') }]),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, 'public/pic3.png') }]),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, 'public/pic5.png') }]),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, 'public/pic6.png') }]),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, 'public/pic7.jpg') }]),
    new HardSourceWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new WebpackBar(),
  ],
});
