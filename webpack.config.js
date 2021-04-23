/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const dotenv = require('dotenv');
const { mergeWithRules } = require('webpack-merge');

const common = require('./webpack/webpack.common');
const dev = require('./webpack/webpack.dev');
const prod = require('./webpack/webpack.prod');

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const merger = mergeWithRules({
    module: {
        rules: {
            test: 'match',
            use: {
                loader: 'match',
                options: 'replace',
            },
        },
    },
});

module.exports = merger(common, isProd ? prod : dev);
