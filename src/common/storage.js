import { isString, isObject } from '../type';

export default class Storage {
  constructor(key) {
    if (!isString(key)) {
      throw new TypeError('Storage Key must be String');
    }
    if (!key) {
      throw new Error('Empty String is not allow');
    }
    this.STORAGE_KEY = key;

    this._init();
  }

  static setItem(...args) {
    localStorage.setItem(...args);
  }

  static getItem(...args) {
    return localStorage.getItem(...args);
  }

  static removeItem(...args) {
    localStorage.removeItem(...args);
  }

  static clearAll() {
    localStorage.clear();
  }

  _init() {
    const value = localStorage[this.STORAGE_KEY];
    if (!value) {
      Storage.setItem(this.STORAGE_KEY, '');
    }
  }

  add(obj = {}) {
    if (!isObject(obj)) throw new TypeError('Invalid Object: ' + obj);
    try {
      const storage = Storage.getItem(this.STORAGE_KEY);
      if (storage) {
        obj = Object.assign(JSON.parse(storage), obj);
      }
      Storage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      throw new Error(e);
    }
    return this;
  }

  set(key, value) {
    const storage = this.get();
    storage[key] = value;
    Storage.setItem(this.STORAGE_KEY, JSON.stringify(storage));
    return this;
  }

  get(key = '') {
    if (!isString(key)) return null;
    try {
      const storage = JSON.parse(Storage.getItem(this.STORAGE_KEY)) || {};
      if (!key) return storage;
      return storage[key];
    } catch (e) {
      console.warn(e);
      return {};
    }
  }

  remove(key = '') {
    const storage = this.get();
    delete storage[key];
    Storage.setItem(this.STORAGE_KEY, JSON.stringify(storage));
    return this;
  }

  clear() {
    Storage.removeItem(this.STORAGE_KEY);
  }
}
