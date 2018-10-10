import isString from '../../src/type/isString.js';
const should = require('should');

describe(`test method 'isString'`, function () {
  it('value to check is string', function () {
    isString(1).should.be.false();
    isString('1').should.be.true();
    isString(new String('1')).should.be.true();
    isString([1]).should.be.false();
    isString({a: 1}).should.be.false();
    isString(null).should.be.false();
    isString(undefined).should.be.false();
    isString(new Function('return 1')).should.be.false();
  });
})
