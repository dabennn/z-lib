import type from './type.js';

/**
 * 是否Symbol类型
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   any  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
export default function isSymbol(any) {
  const typed = typeof any;
  return typed === 'symbol' || (typed === 'object' && any !== null && type(any) === 'symbol');
}
