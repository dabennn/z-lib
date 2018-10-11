import type from './type.js';

/**
 * 是否是数组
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   arr  The value to check.
 * @return   {Boolean}             'true' if the value is Array, else 'false'.
 */
const isArray = Array.isArray || (arr => type(arr) === 'array')
export default isArray;
