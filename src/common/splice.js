import isString from '../type/isString';
import isArray from '../type/isArray';

function slice(...args) {
  return Array.prototype.slice.call(...args);
}

function strSplice(...args) {
  const value = args[0];
  const start = args[1];
  let len = args[2];
  let content = args[3];

  len = len ? len : value.length;
  content = !isString(content) ? '' : content;

  return start === undefined
    ? value
    : value.slice(0, start) + content + value.slice(start + len);
}

function arrSplice(...args) {
  const arr = slice(args[0]);
  const argList = slice(args, 1);
  arr.splice.apply(arr, argList);
  return arr;
}

/**
 * splice方法拓展
 * @param {String|Array} value 操作的数据
 * @param {Number} start 起始位置
 * @param {Number} len 删除的长度
 * @param {Any} content 插入的内容
 * @return {Any} 返回一个修改后的新值，不影响原值
 */
export default function splice(...args) {
  if (!arguments.length) throw new Error('Must have first argument');
  if (isString(args[0])) {
    return strSplice(...args);
  } else if (isArray(args[0])) {
    return arrSplice(...args);
  }
  return void 0;
}
