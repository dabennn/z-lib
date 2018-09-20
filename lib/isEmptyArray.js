import { isArray } from './type';
import isEmptyObjectLike from './isEmptyObjectLike';

/**
 * 是否是空数组
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   arr The value to check.
 * @return   {Boolean}             'true' if the value is emptyArray, else 'false'.
 */
function isEmptyArray(arr) {
  return isArray(arr) && isEmptyObjectLike(arr);
};

export default isEmptyArray;
