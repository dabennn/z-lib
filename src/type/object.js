import is from './is';

/**
 * 是否是空对象或类对象
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:49:15+0800
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is emptyObjectLike, else 'false'.
 */
export function isEmptyObjectLike(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  for (let p in obj) {
    return false;
  }
  return true;
};

/**
 * 是否是对象
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:56:13+0800
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is Object, else 'false'.
 */
export function isObject(obj) {
  return is(obj, 'Object');
};

/**
 * 是否是空对象
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:56:17+0800
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is emptyObject, else 'false'.
 */
export function isEmptyObject(obj) {
  return isObject(obj) && isEmptyObjectLike(obj);
};
