/**
 * 首字母大写
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T19:24:06+0800
 * @param    {String}                   str  string to handle
 * @return   {String}                        new string
 */
export function firstUpper(str) {
  return str.replace(/^[a-zA-Z]/, s => s.toUpperCase());
};

/**
 * 去除字符串头尾空格
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T19:24:06+0800
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function trim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * 去除字符串头部空格
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T19:24:06+0800
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function trimStart(str) {
  return str.replace(/^[\s\uFEFF\xA0]+/, '');
};

/**
 * 去除字符串尾部空格
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-29T19:24:06+0800
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function trimEnd(str) {
  return str.replace(/[\s\uFEFF\xA0]+$/, '');
};

/**
 * 转换字符串为驼峰命名法
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-30T09:54:07+0800
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function camelCase(str) {
  return trim(str).replace(/([^\w]|_)+([a-z])/g, (s, s1, s2) => {
    return s2.toUpperCase();
  }).replace(/[^\w]|_/g, '');
};

/**
 * 转换字符串为首字母大写形式
 * @Author   daben<dabennn07@gmail.com>
 * @DateTime 2018-05-30T10:00:00+0800
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function capitalize(str) {
  return firstUpper(str.toLowerCase());
};