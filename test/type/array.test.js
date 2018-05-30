const { isArray, isEmptyArray } = require('../../dist/bee');
const should = require('should');

describe('determine array type', function () {
  it('test isArray', function () {
    isArray([]).should.be.equal(true);
    isArray(new Array(2)).should.be.equal(true);
    isArray({}).should.be.equal(false);
    isArray(new Object()).should.be.equal(false);
  });
  it('test isEmptyArray', function () {
    let a = [];
    a.b = 1;
    isEmptyArray([1, 2]).should.be.equal(false);
    isEmptyArray([]).should.be.equal(true);
    isEmptyArray(a).should.be.equal(false);
  });
})

