import isFunction from '../../src/type/isFunction.js';
const should = require('should');

describe(`test method 'isFunction'`, function () {
  it('value to check is function', function () {
    function fn () {
      return 1;
    }
    isFunction(1).should.be.false();
    isFunction('1').should.be.false();
    isFunction(new Function()).should.be.true();
    isFunction(() => {}).should.be.true();
    isFunction(fn).should.be.true();
  });
})
