import { isArray, isObject } from './type';

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
