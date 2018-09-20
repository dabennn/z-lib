import { isObject, isString, isArray } from './type';
import qs from './querystring';

/**
 * url解析类
 * @class Url
 * @param {String} url字符串
 *
 *    @example
 *    new Url('http://a.com?a=1').search // return '?a=1'
 */
export class Url {
  constructor(url) {
    if (!arguments.length) throw new TypeError('Invalid URL: undefined');
    if (!isString(url))
      throw new TypeError('Invalid URL: illegal type' + typeof url);
    const matched = url.match(/^([A-Za-z]+:)?(\/{0,3})(?:(\w*):(\w*)@)?([0-9.\-A-Za-z]+)(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i);
    const href = matched[0];
    const protocol = matched[1];
    const slash = matched[2];
    const username = matched[3];
    const password = matched[4];
    const hostname = matched[5];
    const port = matched[6];
    const pathname = matched[7];
    const search = matched[8];
    const hash = matched[9];
    const host = hostname + (port ? ':' : '') + port;
    const origin = protocol + slash + host;

    this.href = href;
    this.origin = origin;
    this.protocol = protocol;
    this.username = username;
    this.password = password;
    this.host = host;
    this.hostname = hostname;
    this.port = port;
    this.pathname = pathname;
    this.search = search;
    this.searchParams = new UrlSearchParams(this.search);
    this.hash = hash;

    return this;
  }
  toString() {
    return this.href;
  }
  toJSON() {
    return this.href;
  }
}

/**
 * url search参数解析类
 * @class UrlSearchParams
 * @param {String|Object} 参数字符串或解析后的对象
 *
 *    @example
 *    new UrlSearchParams('?a=1&b=2').append('c', 2) // return 'a=1&b=2&c=2'
 */
export class UrlSearchParams {
  constructor(param = undefined) {
    let obj = {};
    if (isString(param)) {
      obj = qs.parse(param);
    } else if (isObject(param)) {
      obj = param;
    }
    this._queryObject = obj;
  }
  append(name, value) {
    if (this._queryObject[name]) {
      const p = this._queryObject[name];
      if (isArray(p)) {
        p.push(value);
      } else {
        this._queryObject[name] = [p, value];
      }
    } else {
      this._queryObject[name] = value;
    }
    return this.toString();
  }
  delete(name) {
    delete this._queryObject[name];
    return this.toString();
  }
  // entries() {}
  // forEach(fn, thisArg) {}
  get(name) {
    const value = this._queryObject[name];
    if (isArray(value)) {
      return value[0];
    }
    return this._queryObject[name] || null;
  }
  getAll(name) {
    const value = this._queryObject[name];
    if (isArray(value)) {
      return value;
    }
    return value ? [value] : [];
  }
  has(name) {
    return !!this._queryObject[name];
  }
  // keys() {}
  set(name, value) {
    this._queryObject[name] = value;
    return this.toString();
  }
  // sort() {}
  toString() {
    return qs.stringify(this._queryObject);
  }
  values() {}
}
