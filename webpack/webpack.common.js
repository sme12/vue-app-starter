'use strict';

const { join } = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { srcDir, destDir, publicDir } = require('./paths');

const entries = require('./entries');

module.exports = {
    entry: entries,
    output: {
        path: destDir,
        publicPath: '/',
    },
    resolve: {
        alias: {
            '@': srcDir,
        },
        extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: publicDir,
                    globOptions: { ignore: '**/index.html' },
                },
            ],
        }),

        new HtmlWebpackPlugin({
            template: join(publicDir, 'index.html'),
            filename: 'index.html',
            publicPath: './',
        }),

        new EslintPlugin({
            context: srcDir,
            extensions: 'ts',
            emitError: false,
        }),

        new StylelintPlugin({
            context: srcDir,
            emitError: false,
        }),

        new VueLoaderPlugin(),

        // , new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })
    ],
};
