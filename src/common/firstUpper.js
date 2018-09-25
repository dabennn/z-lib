/**
 * 首字母大写
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to handle
 * @return   {String}                        new string
 */
export function firstUpper(str) {
  return str.replace(/^[a-zA-Z]/, s => s.toUpperCase());
};
