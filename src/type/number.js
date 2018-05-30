import is from './is';

/**
 * 是否是数字
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:40:41+0800
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is Number, else 'false'.
 */
export function isNumber(num) {
  return is(num, 'Number');
};

/**
 * 是否是浮点数
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:42:03+0800
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is floatNumber, else 'false'.
 */
export function isFloatNumber(num) {
  return isNumber(num) && num !== parseInt(num, 10);
};

/**
 * 是否是偶数
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:42:03+0800
 * @param    {*}                   num  The value to check.
 * @return   {Boolean}             'true' if the value is evenNumber, else 'false'.
 */
export function isEvenNumber(num) {
  return isNumber(num) && !(num % 2);
};