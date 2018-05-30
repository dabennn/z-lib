const { isObject, isEmptyObject, isEmptyObjectLike } = require('../../dist/bee');
const should = require('should');

describe('determine object type', function () {
  it('test isObject', function () {
    isObject([]).should.be.equal(false);
    isObject(new Array(2)).should.be.equal(false);
    isObject({}).should.be.equal(true);
    isObject(new Object()).should.be.equal(true);
    isObject(new Function()).should.be.equal(false);
    isObject(null).should.be.equal(false);
    isObject(undefined).should.be.equal(false);
  });
  it('test isEmptyObject', function () {
    let o = {};
    o['0'] = 1;
    isEmptyObject({}).should.be.equal(true);
    isEmptyObject({ a: 1 }).should.be.equal(false);
    isEmptyObject(o).should.be.equal(false);
  });
  it('test isEmptyObjectLike', function () {
    isEmptyObjectLike([]).should.be.equal(true);
    // isEmptyObjectLike(new Array(2)).should.be.equal(false);
    isEmptyObjectLike({}).should.be.equal(true);
    isEmptyObjectLike(new Object()).should.be.equal(true);
    isEmptyObjectLike(new Function()).should.be.equal(false);
    isEmptyObjectLike(null).should.be.equal(false);
    isEmptyObjectLike(undefined).should.be.equal(false);
  });
})

