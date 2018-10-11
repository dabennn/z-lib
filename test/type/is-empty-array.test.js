import isEmptyArray from '../../src/type/isEmptyArray.js';
const should = require('should');

describe(`test method 'isEmptyArray'`, function () {
  it('value to check is empty-array', function () {
    let a = [];
    a.b = 1;
    isEmptyArray([1, 2]).should.be.false();
    isEmptyArray([]).should.be.true();
    isEmptyArray(a).should.be.false();
  });
})
