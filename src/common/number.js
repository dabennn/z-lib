import { is, isNumber, isArray, isObject } from '../type/index';

/**
 * 生成一定范围内的随机数
 * @author   daben<dabennn07@gmail.com>
 * @param    {Number}                   start  start of range
 * @param    {Number}                   end    end of range
 * @param    {Boolean}                  int    result is int if true, else is float
 *
 * @example
 * random(7) // [0-7) float
 * random(7, 10)  // [7-10) float
 * random(7, 10, true) // [7-10] int
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
    baseRandom = Math.ceil(baseRandom);
  }
  return baseRandom + start;
};

/**
 * 生成加权随机数
 * @param {Array|Object} weights 加权列表
 *
 * @example
 *    weightedRandom([3, 2, 2, 1]); // 返回下表0、1、2、3中的一项
 *    weightedRandom({ A: 3, B: 4, c: 1 }); // 返回键A、B、c中的一项
 *
 * @return {Number|String} 返回一个数组下标或对象的键
 */
export function weightedRandom(weights) {
  if (!isArray(weights) && !isObject(weights)) {
    throw TypeError('Invalid type of ' + weights + ',must be Array or Object');
  }
  let result = 0;
  function _randomIndex(l) {
    const sum = l.reduce((a, b) => a + b);
    const r = random(0, sum, true);
    let cur = 0;
    let res = 0;
    for (let i = 0; i < l.length; i++) {
      cur += l[i];
      if (r <= cur) {
        res = i;
        break;
      }
    }
    return res;
  }
  if (isArray(weights)) {
    weights = Array.prototype.slice.call(weights);
    result = _randomIndex(weights);
  } else if (isObject(weights)) {
    const keys = [];
    const values = [];
    for (const p in weights) {
      keys.push(p);
      values.push(weights[p]);
    }
    result = keys[_randomIndex(values)];
  }
  return result;
};
