import firstUpper from './firstUpper.js';
import trim from './trim.js';

/**
 * 转换字符串为首字母大写形式
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @return   {String}                        new string
 */
export default function capitalize(str) {
  return firstUpper(trim(str).toLowerCase());
};
