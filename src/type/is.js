/**
 * 判断类型
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                        o     The value to check.
 * @param    {String}                   type  type string, like 'Number', 'Object'
 * @return   {Boolean}                  true if the vaule is same as 'type string', else false.
 */
export default function is(o, type) {
  return Object.prototype.toString.call(o) === '[object ' + type + ']';
}

export function isString(str) {
  return typeof str === 'string';
}

export function isNumberString(str) {
  return isString(str) && /^\d+$/.test(str);
}

export function isFunction(func) {
  return typeof func === 'function';
}

export function isBoolean(bool) {
  return is(bool, 'Boolean');
}

export function isNull(p) {
  return p === null;
}

export function isUndefined(p) {
  return p === undefined;
}
