import is from './is';
import { isEmptyObjectLike } from './object';

/**
 * 是否是数组
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:43:03+0800
 * @param    {*}                   arr  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export const isArray = Array.isArray || (arr => is(arr, 'Array'));

/**
 * 是否是空数组
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:45:33+0800
 * @param    {*}                   arr The value to check.
 * @return   {Boolean}             'true' if the value is emptyArray, else 'false'.
 */
export function isEmptyArray(arr) {
  return isArray(arr) && isEmptyObjectLike(arr);
};
