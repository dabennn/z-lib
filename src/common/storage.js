import { isObject } from '../type';

export default class Storage {
  constructor(key) {
    if (!isString(key)) {
      throw new TypeError('Storage Key must be String');
    }
    if (!key) {
      throw new Error('Empty String is not allow');
    }
    this.STORAGE_KEY = key;
  }

  add(obj = {}) {
    if (!isObject(obj)) throw new TypeError('Invalid Object: ' + obj);
    try {
      const storage = localStorage.getItem(this.STORAGE_KEY);
      if (storage) {
        obj = Object.assign(JSON.parse(storage), obj);
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      throw new Error(e);
    }
    return this;
  }

  set(key, value) {
    const storage = this.get();
    storage[key] = value;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storage));
    return this;
  }

  get(key = '') {
    if (!isString(key)) return null;
    try {
      const storage = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
      if (!key) return storage;
      return storage[key];
    } catch (e) {
      console.error(e);
      return {};
    }
  }

  remove(key = '') {
    const storage = this.get();
    delete storage[key];
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storage));
    return this;
  }

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
