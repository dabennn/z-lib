import isNaN from './isNaN';
import type from './type';

/**
 * 是否数字
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   any  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export default function isNumber(any) {
  return type(any) === 'number' && !isNaN(any);
}
