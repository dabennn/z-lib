import { isNumber } from './type';

/**
 * 是否是偶数
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is evenNumber, else 'false'.
 */
function isEvenNumber(num) {
  return isNumber(num) && !(num % 2);
};

export default isEvenNumber;
