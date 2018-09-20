import { isString } from 'type';

function isNumberString(str) {
  return isString(str) && /^\d+$/.test(str);
}

export default isNumberString;
