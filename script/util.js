const fs = require('fs');
const path = require('path');

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

module.exports = {
  traversal,
};
