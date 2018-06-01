/**
 * 判断类型
 * @author   daben<dabennn07@gmail.com>
 * @param    {*}                        o     The value to check.
 * @param    {String}                   type  type string, like 'Number', 'Object'
 * @return   {Boolean}                  true if the vaule is same as 'type string', else false.
 */
export default function is(o, type) {
  return Object.prototype.toString.call(o) === '[object ' + type + ']';
};
