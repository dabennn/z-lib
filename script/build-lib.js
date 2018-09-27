const fs = require('fs');
const path = require('path');
const ora = require('ora');
const { traversal } = require('./util.js');
const { IGNORE_FILES } = require('./config');
const srcPath = path.resolve(__dirname, '../src');
const libPath = path.resolve(__dirname, '..', 'lib');

const spinner = ora('Start Building...');

spinner.start();

const filesPath = traversal(srcPath, (src) => {
  const regex = IGNORE_FILES.reduce((a, b) => a + '|' + b).replace(/\./g, '\\.');
  return !new RegExp(regex).test(src);
});

fs.mkdir(libPath, () => {
  filesPath.forEach((file) => {
    const filename = file.match(/\w+\.js/)[0];
    const writePath = path.resolve(libPath, filename);

    spinner.text = `Building File: ${filename}`;

    let content = fs.readFileSync(file, { encoding: 'utf8' });
    content = content.replace(/(from\s)'(.*?)'/gm, (s, s1, s2) => {
      s2 = /\//.test(s2) ? s2.replace(/.*(\/\w*)(\.js)?$/, '.$1.js') : './' + s2 + '.js';
      return `${s1}'${s2}'`;
    });

    fs.writeFileSync(writePath, content, { encoding: 'utf8' });
  });
});

spinner.stop();
