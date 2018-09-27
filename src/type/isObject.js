import type from './type';

/**
 * 是否对象
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   any  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export default function isObject(any) {
  return type(any) === 'object';
}
