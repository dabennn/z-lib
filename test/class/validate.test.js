import Validate, { validator } from '../../src/common/validate.js';
const should = require('should');

describe(`test class 'Validate' and method 'validator'`, function () {
  it('validate String \'chan\'', function () {
    validator('chan').minLength('5').maxLength('7').done().should.be.Object().and.be.eql({
      name: 'minLength',
      status: false,
      msg: '最小不能少于5个字符'
    });
    validator('chan').minLength('4').maxLength('7').done().should.be.Object().and.be.eql({
      name: 'maxLength',
      status: true,
      msg: '验证成功'
    });
  });
  it('register new validate function', function () {
    Validate.register('isOne', {
      validate: v => v == 1,
      successMsg: 'is one',
      errorMsg: 'is not one',
    });
    validator(1).isOne().done().should.be.Object().and.be.eql({
      name: 'isOne',
      status: true,
      msg: 'is one'
    });
  });
})
