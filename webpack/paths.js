/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { join } = require('path');

const srcDir = join(__dirname, '../src');
const destDir = join(__dirname, '../dist/');
const publicDir = join(__dirname, '../public/');

module.exports = {
    srcDir,
    destDir,
    publicDir,
};
