import isNumber from '../../src/type/isNumber.js';
const should = require('should');

describe(`test method 'isNumber'`, function () {
  it('value to check is number', function () {
    isNumber(0.1).should.be.true();
    isNumber(1).should.be.true();
    isNumber(new Number('1')).should.be.true();
    isNumber('1').should.be.false();
    isNumber([1]).should.be.false();
    isNumber({a: 1}).should.be.false();
    isNumber(null).should.be.false();
    isNumber(undefined).should.be.false();
    isNumber(new Function('return 1')).should.be.false();
  });
})
