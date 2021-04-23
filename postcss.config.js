const dotenv = require('dotenv');
dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const plugins = [require('autoprefixer')];

if (isProd) {
    plugins.push(require('postcss-csso'));
}

module.exports = {
    plugins,
};
