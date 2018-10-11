import {
  TRIM_POSITION_START,
  TRIM_POSITION_END,
  TRIM_POSITION_ALL,
  REGEXP_TRIM_BOTH,
  REGEXP_TRIM_START,
  REGEXP_TRIM_END,
  REGEXP_TRIM_ALL,
} from '../constants';

/**
 * 去除字符串空格
 * @author   daben<dabennn07@gmail.com>
 * @param    {String}                   str  string to transform
 * @param    {String}                   posi trim position
 * @return   {String}                        new string
 */
export default function trim(str, posi = REGEXP_TRIM_BOTH) {
  switch (posi) {
    case TRIM_POSITION_START:
      return str.replace(REGEXP_TRIM_START, '');
    case TRIM_POSITION_END:
      return str.replace(REGEXP_TRIM_END, '');
    case TRIM_POSITION_ALL:
      return str.replace(REGEXP_TRIM_ALL, '');
    default:
      return str.replace(REGEXP_TRIM_BOTH, '');
  }
};
