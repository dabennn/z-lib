import isNumber from './isNumber.js';

/**
 * 是否是浮点数
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is floatNumber, else 'false'.
 */
export default function isFloatNumber(num) {
  return isNumber(num) && num !== parseInt(num, 10);
};
