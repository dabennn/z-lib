/**
 * 获取类型字符串
 * @param {*} any value to check
 * @return {String} type string
 */
export default function type(any) {
  const typestr = Object.prototype.toString.call(any);
  return typestr.substring(8, typestr.length - 1).toLowerCase();
}
