import isString from '../type/isString';
import isObject from '../type/isObject';
import isArray from '../type/isArray';

function toStr(val) {
  return /\[.*\]/.test(`${val}`) ? '' : `${val}`
}

/**
 * 解析URL查询字符串
 * @param {String} str 要解析的url查询字符串
 * @param {String} sep 用于界定查询字符串中的键值对的子字符串。默认为 '&'
 * @param {String} eq 用于界定查询字符串中的键与值的子字符串。默认为 '='
 *
 * @example
 *    qs.parse('a=1&a=2'); // return { a: [1, 2] }
 *
 * @return {Object} url查询字符串键值对对象
 */
function parse(val = '', sep = '&', eq = '=') {
  if (!isString(val)) return {}
  const reduceFn = (acc, cur) => {
    const [key, value] = cur.split(eq)
    if (acc[key] !== undefined) {
      const val = acc[key]
      if (isArray(val)) {
        val.push(value)
      } else {
        acc[key] = [val, value]
      }
    } else {
      acc[key] = value
    }
    return acc
  }
  const str = val.replace(/^\?/, '').replace(new RegExp( '\\' + sep + '$'), '')
  const strs = str.split(sep)
  return strs.reduce(reduceFn, {})
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
  if (!isObject(obj) && !isArray(obj)) return ''
  const getPart = (key, value) => key + eq + value + sep
  const reduceFn = (acc, cur) => {
    const val = obj[cur]
    if (isArray(val)) {
      return acc + val.reduce((_acc, _cur) => _acc + getPart(cur, toStr(_cur)), '')
    }
    return acc + getPart(cur, toStr(val))
  }
  const str = Object.keys(obj).reduce(reduceFn, '')
  return str.replace(new RegExp( '\\' + sep + '$'), '')
}

export default {
  parse,
  stringify
}
