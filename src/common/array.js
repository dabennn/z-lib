import { random } from './number';
import {
  is,
  isNumber,
  isArray,
  isEmptyArray
} from '../type/index';

/**
 * 列表快速生成
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-30T15:52:51+0800
 * @param    {Number}                   length length of list
 * @param    {Function|Number}          fn     a function to generate list item. if is Number, array will fill with it.
 * @return   {Array}                           new array
 */
export function list(length = 0, fn = () => {}) {
  if (isNumber(fn)) {
    fn = new Function(`return ${fn}`);
  }
  if (!is(fn, 'Function')) {
    throw new TypeError('Expected a Function');
  }
  return Array.from(Array(length), fn);
};

/**
 * 随机返回数组中的一项
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-30T16:18:14+0800
 * @param    {Array}                   arr  an array
 * @return   {*}                            random item of array
 */
export function randomItem(arr = []) {
  if (!isArray(arr)) {
    throw new TypeError('Expected an Array');
  }
  if (isEmptyArray(arr)) {
    return undefined;
  }
  return arr[random(arr.length - 1, true)];
};
