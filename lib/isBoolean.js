import type from './type.js';

/**
 * 是否布尔类型
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   any  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export default function isBoolean(any) {
  return type(any) === 'boolean';
}
