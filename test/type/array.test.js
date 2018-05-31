const { isArray, isEmptyArray } = require('../../dist/bee');
const should = require('should');

describe('determine array type', function () {
  it('test isArray', function () {
    isArray([]).should.be.true();
    isArray(new Array(2)).should.be.true();
    isArray({}).should.be.false();
    isArray(new Object()).should.be.false();
  });
  it('test isEmptyArray', function () {
    let a = [];
    a.b = 1;
    isEmptyArray([1, 2]).should.be.false();
    isEmptyArray([]).should.be.true();
    isEmptyArray(a).should.be.false();
  });
})

