/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { join } = require('path');
const { srcDir } = require('./paths');

module.exports = {
    app: [join(srcDir, './main.ts')],
};
