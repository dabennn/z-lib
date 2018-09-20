import { isString, isNumber, isObject, isArray } from './type';

function isStringOrNumber(val) {
  return isString(val) || isNumber(val);
}

/**
 * 解析URL查询字符串
 * @param {String} str 要解析的url查询字符串
 * @param {String} sep 用于界定查询字符串中的键值对的子字符串。默认为 '&'
 * @param {String} eq 用于界定查询字符串中的键与值的子字符串。默认为 '='
 *
 * @example
 *    import { qs } from './zcos'
 *    qs.parse('a=1&a=2'); // return { a: [1, 2] }
 *
 * @return {Object} url查询字符串键值对对象
 */
function parse(str = '', sep = '&', eq = '=') {
  if (!isString(str)) return {};
  str = str.replace(/^\?/, '').replace(new RegExp( '\\' + sep + '$'), '');

  const strs = str.split(sep);
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    const arr = strs[i].split(eq);
    const key = arr[0];
    const value = arr[1];

    if (obj[key] !== undefined) {
      const val = obj[key];
      if (isArray(val)) {
        val.push(value);
      } else {
        obj[key] = [val, value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

/**
 * 序列化对象成为url查询字符串
 * @param {Object} obj 要序列化成 URL 查询字符串的对象
 * @param {String} sep 用于界定查询字符串中的键值对的子字符串。默认为 '&'
 * @param {String} eq 用于界定查询字符串中的键与值的子字符串。默认为 '='
 *
 * @example
 *    const o = { a: 1, b: [1, 2] }
 *    qs.stringify(o); // return 'a=1&b=1&b=2'
 *
 * @return {String} 序列化后的字符串
 */
function stringify(obj = {}, sep = '&', eq = '=') {
  if (!isObject(obj) && !isArray(obj)) return '';
  const getPart = (key, value) => key + eq + value + sep;
  let str = '', p;

  for (p in obj) {
    const val = obj[p];
    if (isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        str += getPart(p, isStringOrNumber(val[i]) ? val[i] : '');
      }
    } else {
      str += getPart(p, isStringOrNumber(val) ? val : '');
    }
  }
  return str.replace(new RegExp( '\\' + sep + '$'), '');
}

export default {
  parse,
  stringify,
};
