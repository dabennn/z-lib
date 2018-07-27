import is from './is';

/**
 * 是否是空对象或类对象
 * @author   daben<dabennn07@gmail.com>
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
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is Object, else 'false'.
 */
export function isObject(obj) {
  return is(obj, 'Object');
};

/**
 * 是否是typeof值为'object'或'function'的对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is ObjectLike, else 'false'.
 */
export function isObjectLike(obj) {
  const type = typeof obj;
  return obj !== null && (type === 'object' || type === 'function');
};

/**
 * 是否是空对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is emptyObject, else 'false'.
 */
export function isEmptyObject(obj) {
  return isObject(obj) && isEmptyObjectLike(obj);
};
