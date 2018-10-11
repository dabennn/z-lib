import isFunction from '../type/isFunction';
import isString from '../type/isString';
import isObjectLike from '../type/isObjectLike';

function typeErr(except, got) {
  return TypeError(`Except '${except}', got '${got}'`);
}

function registerDefaultValidate(Validate) {
  // 不能少于多少个字符
  Validate.register('minLength', {
    validate: function(v, limit) {
      this.rules.minLength.errorMsg = '最小不能少于' + limit + '个字符';
      return String(v).length >= limit;
    },
    successMsg: '验证成功',
    errorMsg: '长度错误',
  });
  // 不能多于多少个字符
  Validate.register('maxLength', {
    validate: function(v, limit) {
      this.rules.maxLength.errorMsg = '最大不能超过' + limit + '个字符';
      return String(v).length <= limit;
    },
    successMsg: '验证成功',
    errorMsg: '长度错误',
  });
  // 验证手机号码
  Validate.register('isMoblie', {
    validate: v => /^1\d{10}$/.test(v),
    successMsg: '验证成功',
    errorMsg: '请输入有效的手机号码',
  });
}

const rulesCache = {};

/**
 * 验证类
 * @class Validate
 * @param {Any} 需要验证的值
 * @method register 注册验证函数
 * @method done 返回验证结果
 */
export default class Validate {
  constructor(value) {
    this.value = value;
    this.rules = rulesCache;
    this.lastResult = {
      name: 'VALIDATE_NAME',
      status: true,
      msg: 'VALIDATE_MASSAGE',
    };

    registerDefaultValidate(Validate);
  }

  /**
   * 注册验证函数
   * @param {String} name 验证函数名
   * @param {Object} rule 验证规则对象
   * @param {Function} [rule.validate] 验证函数。接受多个参数，第一个参数是需要验证的值，其他参数依次为调用时传入的参数
   * @param {String} [rule.successMsg] 成功的提示
   * @param {String} [rule.errorMsg] 失败的提示
   */
  static register(name, rule) {
    if (!isFunction(rule.validate)) throw typeErr('function', rule.validate);
    if (!isString(rule.successMsg)) throw typeErr('string', rule.successMsg);
    if (!isString(rule.errorMsg)) throw typeErr('string', rule.errorMsg);

    rulesCache[name] = {
      name,
      validate: rule.validate,
      successMsg: rule.successMsg,
      errorMsg: rule.errorMsg,
    };

    Validate.prototype[name] = function(...args) {
      if (!this.lastResult.status) {
        return this;
      }
      const _rule = this.rules[name];
      const status = _rule.validate.call(this, this.value, ...args);
      if (!!status) {
        this.lastResult = {
          name,
          status: true,
          msg: _rule.successMsg,
        };
      } else {
        this.lastResult = {
          name,
          status: false,
          msg: _rule.errorMsg,
        };
      }
      return this;
    };
  }

  done() {
    return this.lastResult;
  }
}

/**
 * 验证器
 * @param {Any} 验证的值
 * @param {Array|Object} 验证函数配置
 * @return Validate实例
 *
 *    @example
 *    let ret = validator(1).minLength(4).done()
 *    console.log(ret.name, ret.msg, ret.status) // 'minLength', '最小不能少于4个字符', false
 */
export function validator(value, options) {
  if (isObjectLike(options)) {
    for (const p in options) {
      Validate.register(p.name || p, options[p]);
    }
  }
  return new Validate(value);
}
