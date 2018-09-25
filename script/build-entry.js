const fs = require('fs');
const path = require('path');
const { traversal } = require('./util.js');
const { IGNORE_FILES } = require('./config');
const srcPath = path.resolve(__dirname, '../src');

const filesPath = traversal(srcPath, (src) => {
  const regex = IGNORE_FILES.reduce((a, b) => a + '|' + b).replace(/\./g, '\\.');
  return !new RegExp(regex).test(src);
});
