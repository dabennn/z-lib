/**
 * 判断类型
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T16:32:09+0800
 * @param    {*}                        o     The value to check.
 * @param    {String}                   type  type string, like 'Number', 'Object'
 * @return   {Boolean}                  true if the vaule is same as 'type string', else false.
 */
export default function is(o, type) {
  return Object.prototype.toString.call(o) === '[object ' + type + ']';
};