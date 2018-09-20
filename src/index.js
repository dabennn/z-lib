// import type methods
import type from 'type';
import isEmptyObject from './type/isEmptyObject';
import isEmptyArray from './type/isEmptyArray';
import isObjectLike from './type/isObjectLike';
import isEmptyObjectLike from './type/isEmptyObjectLike';
import isNumberString from './type/isNumberString';
import isEvenNumber from './type/isEvenNumber';
import isFloatNumber from './type/isFloatNumber';

// import common methods
import camelCase from './common/camelCase';
import capitalize from './common/capitalize';
import firstUpper from './common/firstUpper';
import random from './common/random';
import trim from './common/trim';
import randomItem from './common/randomItem';
import weightedRandom from './common/weightedRandom';
import versionCompare from './common/versionCompare';
import list from './common/list';
import querystring from './common/querystring';
import image from './common/image';
import deepClone from './common/deepClone';
import Storager from './common/storage';
import { Validate, validator } from './common/validate';
import { Url, UrlSearchParams } from './common/url';

// import module methods
import env from './module/env';
import wxPreviewImage from './module/wxPreviewImage';

// import lib methods
import debounce from './lib/lodash/debounce';
import throttle from './lib/lodash/throttle';

const Z = Object.assign({}, type, env, {
  isEmptyObject,
  isEmptyArray,
  isObjectLike,
  isEmptyObjectLike,
  isNumberString,
  isEvenNumber,
  isFloatNumber,
  camelCase,
  capitalize,
  firstUpper,
  random,
  trim,
  randomItem,
  weightedRandom,
  versionCompare,
  list,
  querystring,
  image,
  deepClone,
  Storager,
  Validate,
  validator,
  Url,
  UrlSearchParams,
  wxPreviewImage,
  debounce,
  throttle,
});

// export type methods
export * from 'type';
export { default as isEmptyObject } from './type/isEmptyObject';
export { default as isEmptyArray } from './type/isEmptyArray';
export { default as isObjectLike } from './type/isObjectLike';
export { default as isEmptyObjectLike } from './type/isEmptyObjectLike';
export { default as isNumberString } from './type/isNumberString';
export { default as isEvenNumber } from './type/isEvenNumber';
export { default as isFloatNumber } from './type/isFloatNumber';

// export common methods
export * from './common/validate';
export * from './common/url';
export { default as camelCase } from './common/camelCase';
export { default as capitalize } from './common/capitalize';
export { default as firstUpper } from './common/firstUpper';
export { default as random } from './common/random';
export { default as trim } from './common/trim';
export { default as randomItem } from './common/randomItem';
export { default as weightedRandom } from './common/weightedRandom';
export { default as versionCompare } from './common/versionCompare';
export { default as list } from './common/list';
export { default as querystring } from './common/querystring';
export { default as image } from './common/image';
export { default as deepClone } from './common/deepClone';
export { default as Storager } from './common/storage';

// export module methods
export { default as env } from './module/env';
export { default as wxPreviewImage } from './module/wxPreviewImage';

// export lib methods
export { default as debounce } from './lib/lodash/debounce';
export { default as throttle } from './lib/lodash/throttle';

export default Z;
