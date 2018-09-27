/**
 * 是否是typeof值为'object'或'function'的对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is ObjectLike, else 'false'.
 */
export default function isObjectLike(obj) {
  const type = typeof obj;
  return obj !== null && (type === 'object' || type === 'function');
};
