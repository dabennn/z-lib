import isObject from './isObject.js';
import isEmptyObjectLike from './isEmptyObjectLike.js';

/**
 * 是否是空对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is emptyObject, else 'false'.
 */
export default function isEmptyObject(obj) {
  return isObject(obj) && isEmptyObjectLike(obj);
};
