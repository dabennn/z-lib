import isNumberString from '../../src/type/isNumberString.js';
const should = require('should');

describe(`test method 'isNumberString'`, function () {
  it('value to check is number string', function () {
    isNumberString(0.1).should.be.false();
    isNumberString(1).should.be.false();
    isNumberString(new Number('1')).should.be.false();
    isNumberString('1').should.be.true();
    isNumberString([1]).should.be.false();
    isNumberString({a: 1}).should.be.false();
    isNumberString(null).should.be.false();
    isNumberString(undefined).should.be.false();
    isNumberString(new Function('return 1')).should.be.false();
  });
})
