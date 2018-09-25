/**
 * 判断类型
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                        o     The value to check.
 * @param    {String}                   type  type string, like 'Number', 'Object'
 * @return   {Boolean}                  true if the vaule is same as 'type string', else false.
 */
function is(o, type) {
  return Object.prototype.toString.call(o) === '[object ' + type + ']';
}

export function isString(str) {
  return typeof str === 'string';
}

export function isFunction(func) {
  return typeof func === 'function';
}

export function isNaN(num) {
  return num !== num;
}

export function isNumber(n) {
  // return typeof n === 'number' && !isNaN(n);
  return is(n, 'Number') && !isNaN(n);
}

export function isObject(o) {
  return is(o, 'Object');
}

export function isBoolean(o) {
  return is(o, 'Boolean');
}

/**
 * 是否是数组
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   arr  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export const isArray = Array.isArray || (arr => is(arr, 'Array'));
