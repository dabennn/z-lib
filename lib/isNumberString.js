import { isString } from './type';

export function isNumberString(str) {
  return isString(str) && /^\d+$/.test(str);
}
