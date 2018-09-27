import isString from './isString';

/**
 * 是否数字字符串
 * @param {*} str value to check
 */
export default function isNumberString(str) {
  return isString(str) && /^\d+$/.test(str);
}
