import is from './is';
import { isEmptyObjectLike } from './object';

/**
 * 是否是数组
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   arr  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export const isArray = Array.isArray || (arr => is(arr, 'Array'));

/**
 * 是否是空数组
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   arr The value to check.
 * @return   {Boolean}             'true' if the value is emptyArray, else 'false'.
 */
export function isEmptyArray(arr) {
  return isArray(arr) && isEmptyObjectLike(arr);
};
