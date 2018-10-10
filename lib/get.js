import isSymbol from './isSymbol.js';

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) return value;
  return `${value}`;
}

/**
 * 链式取值
 * @param {Object} obj 数据源
 * @param {String|Array} props key
 * @param {Any} def 默认值
 */
export default function get(obj, props, def) {
  props = typeof props === 'string' ? props.split(/\.|\[|\]/) : props;

  const len = props.length;
  let ret = obj;

  for (let i = 0; i < len; i++) {
    const prop = props[i];
    if (prop === '') continue;
    if (ret === undefined) return def;
    ret = ret[toKey(prop)];
  }

  return ret || def;
};
