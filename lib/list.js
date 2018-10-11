import isNumber from './isNumber.js';
import isFunction from './isFunction.js';

/**
 * 列表快速生成
 * @author   daben<dabennn07@gmail.com>
 * @param    {Number}                   length length of list
 * @param    {Function|Number}          fn     a function to generate list item. if is Number, array will fill with it.
 * @return   {Array}                           new array
 */
export default function list(length = 0, fn = () => {}) {
  if (isNumber(fn)) {
    fn = Function(`return ${fn}`);
  }
  if (!isFunction(fn)) {
    throw new TypeError('Expected a Function');
  }
  return Array.from(Array(length), fn);
};
