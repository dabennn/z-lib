import type from './type';

/**
 * 是否字符串
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   any  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export default function isString(any) {
  return type(any) === 'string';
}
