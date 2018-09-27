import trim from './trim';

/**
 * 转换字符串为驼峰命名法
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export default function camelCase(str) {
  return trim(str).replace(/([^\w]|_)+([a-z])/g, (s, s1, s2) => {
    return s2.toUpperCase();
  }).replace(/[^\w]|_/g, '');
};
