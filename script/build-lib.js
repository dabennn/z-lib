const fs = require('fs');
const path = require('path');
const ora = require('ora');
const srcPath = path.resolve(__dirname, '../src');
const libPath = path.resolve(__dirname, '..', 'lib');
const spinner = ora('Start Building...');

function traversal(src, filter = () => {}) {
  const files = [];
  const dirList = fs.readdirSync(src, 'utf8');
  dirList.forEach(item => {
    const _path = path.join(src, item);
    if (fs.statSync(_path).isFile()) {
      if (typeof filter === 'function' && !filter(_path)) return;
      files.push(_path);
    } else {
      if (/node_modules/.test(_path)) return;
      const _files = traversal(_path, filter);
      files.push(..._files);
    }
  });
  return files;
}

spinner.start();
const filesPath = traversal(srcPath, (src) => {
  const ignoreFiles = [
    '.DS_Store',
    'LICENSE',
    'lib/index.js',
    'src/index.js',
    'src/root.js',
    'constants.js',
  ];
  const regex = ignoreFiles.reduce((a, b) => a + '|' + b).replace(/\./g, '\\.');
  return !new RegExp(regex).test(src);
});

fs.mkdir(libPath, () => {
  filesPath.forEach((file) => {
    const filename = file.match(/\w+\.js/)[0];
    const writePath = path.resolve(libPath, filename);

    spinner.text = `Building File: ${filename}`;

    let content = fs.readFileSync(file, { encoding: 'utf8' });
    content = content.replace(/(import.*?)'(.*?)'/gm, (s, s1, s2) => {
      s2 = /\//.test(s2) ? s2.replace(/.*(\/\w*$)/, '.$1') : './' + s2;
      return `${s1}'${s2}'`;
    });

    fs.writeFileSync(writePath, content, { encoding: 'utf8' });
  });
});


spinner.stop();
