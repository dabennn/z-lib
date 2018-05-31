import { is, isNumber } from '../type/index';

/**
 * 生成一定范围内的随机数
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-30T11:37:21+0800
 * @param    {Number}                   start  start of range
 * @param    {Number}                   end    end of range
 * @param    {Boolean}                  int    result is int if true, else is float
 *
 * @example
 * random(7) // [0-7) float
 * random(7, 10)  // [7-10) float
 * random(7, 10, true) // [0-7) int
 *
 * @return   {Number}
 */
export function random(start = 0, end, int = false) {
  if (arguments.length === 1 && isNumber(start)) {
    end = start;
    start = 0;
  }
  if (is(end, 'Boolean')) {
    int = end;
    end = start;
    start = 0;
  }
  if (!isNumber(start) || !isNumber(end)) {
    throw new TypeError('Expected a number');
  }
  let baseRandom = Math.random() * (end - start);
  if (int) {
    baseRandom = Math.floor(baseRandom);
  }
  return baseRandom + start;
};
