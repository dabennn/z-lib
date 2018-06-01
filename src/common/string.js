/**
 * 首字母大写
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to handle
 * @return   {String}                        new string
 */
export function firstUpper(str) {
  return str.replace(/^[a-zA-Z]/, s => s.toUpperCase());
};

/**
 * 去除字符串头尾空格
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function trim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * 去除字符串头部空格
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function trimStart(str) {
  return str.replace(/^[\s\uFEFF\xA0]+/, '');
};

/**
 * 去除字符串尾部空格
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function trimEnd(str) {
  return str.replace(/[\s\uFEFF\xA0]+$/, '');
};

/**
 * 转换字符串为驼峰命名法
 * @author   daben<dabennn07@gmail.com>
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
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export function capitalize(str) {
  return firstUpper(trim(str).toLowerCase());
};
