import { isObject, isArray } from '../type/type';
import { isObjectLike } from '../type/isObjectLike';

const objList = [];

function copyObjectLike(value) {
  const newObj = new value.constructor();
  let p;
  objList.push(value);

  for (p in value) {
    const index = objList.indexOf(value[p]);
    if (index > -1) { // 处理循环引用
      newObj[p] = objList[index];
    } else {
      newObj[p] = deepClone(value[p]);
    }
  }
  return newObj;
}

/**
 * 对象、数组深拷贝
 * @param {*} value 需要拷贝的对象
 * @example
 *    deepClone({ a: 1, b: [1, 2] });
 *
 * @return {*} 新的对象或数组，非{}、[]数据原样返回
 */
export function deepClone(value) {
  if (!isObjectLike(value)) return value;
  if (isArray(value) || isObject(value)) {
    return copyObjectLike(value);
  }
  return value;
}
