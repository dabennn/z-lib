import {
  isObject,
  isArray,
  isString,
  isFunction,
} from '../type';

export default class ImageLoader {
  constructor(...args) {
    this._loading = false;
    this._index = 0;
    this.list = [];
    this.queue = [];
    this.success = [];
    this.failed = [];
    this.count = 0;
    this.compelete = () => {};
    this.progress = () => {};

    this._init(args);
  }

  _init(args) {
    if (!args.length) return;
    if (isString(args[0]) || isArray(args[0])) {
      ths.add(args[0]);
    }
    if (isObject(args[1])) {
      if (!isFunction(args[1].compelete) || !isFunction(args[1].progress)) throw new TypeError('Must be a function');
      this.compelete = args[1].compelete;
      this.progress = args[1].progress;
    }
  }

  on(name, cb = () => {}) {
    if (!isFunction(cb)) throw new TypeError(cb + 'is not a function');
    if (name !== 'compelete' && name !== 'progress') return;
    this[name] = cb;
  }

  add(uri) {
    if (!isString(uri) && !isArray(uri)) {
      throw new TypeError('Just allow Array or String');
    }
    if (isString(uri)) {
      uri = [{ name: 'image$' + this._index, uri }];
    }
    for (const p of uri) {
      const item = {};
      if (isString(p)) {
        item.name = 'image$' + this._index;
        item.uri = p;
      } else {
        if (!p.uri) throw new Error('Missing image uri');
        item.name = p.name ? p.name : 'image$' + this._index;
        item.uri = p.uri;
      }
      this.list.push(item);
      this._index++;
    }
    return this;
  }

  load() {
    if (!this._loading) {
      this.queue.push(...this.list);
      this._loading = true;
    }
    if (!this.queue.length) {
      this._loading = false;
      this.compelete(this.success, this.failed);
      return;
    }
    const item = this.queue[0];
    const image = new Image();
    const successFn = () => {
      const cur = this.queue.shift();
      cur.image = image;
      this.count++;
      this.success.push(cur);
      this.progress(this.count / this.list.length);
      this.load();
    };
    const errorFn = (err) => {
      const cur = this.queue.shift();
      cur.error = err;
      this.failed.push(cur);
      console.error(err);
      this.load();
    };

    image.src = item.uri;

    if (image.complete) {
      successFn();
    } else {
      image.addEventListener('load', successFn, false);
      image.addEventListener('error', errorFn, false);
    }
  }
}
