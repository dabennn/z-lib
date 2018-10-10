import isObject from '../../src/type/isObject.js';
const should = require('should');

describe(`test method 'isObject'`, function () {
  it('value to check is object', function () {
    isObject([]).should.be.false();
    isObject(new Array(2)).should.be.false();
    isObject({}).should.be.true();
    isObject(new Object()).should.be.true();
    isObject(new Function()).should.be.false();
    isObject(null).should.be.false();
    isObject(undefined).should.be.false();
  });
})
