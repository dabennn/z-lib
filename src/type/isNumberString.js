import { isString } from '../type/type';

export function isNumberString(str) {
  return isString(str) && /^\d+$/.test(str);
}
