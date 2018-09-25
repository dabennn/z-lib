import { isNumber } from '../type/type';

/**
 * 是否是浮点数
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is floatNumber, else 'false'.
 */
export function isFloatNumber(num) {
  return isNumber(num) && num !== parseInt(num, 10);
};
