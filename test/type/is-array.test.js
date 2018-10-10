import isArray from '../../src/type/isArray.js';
const should = require('should');

describe(`test method 'isArray'`, function () {
  it('value to check is array', function () {
    isArray([]).should.be.true();
    isArray(new Array(2)).should.be.true();
    isArray({}).should.be.false();
    isArray(new Object()).should.be.false();
  });
})
