/**
 * 是否是空对象或类对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   obj  The value to check.
 * @return   {Boolean}             'true' if value is emptyObjectLike, else 'false'.
 */
function isEmptyObjectLike(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  for (let p in obj) {
    return false;
  }
  return true;
};

export default isEmptyObjectLike;