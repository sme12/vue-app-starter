'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new CleanPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
};
