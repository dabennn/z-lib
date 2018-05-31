const { isObject, isEmptyObject, isEmptyObjectLike } = require('../../dist/z');
const should = require('should');

describe('determine object type', function () {
  it('test isObject', function () {
    isObject([]).should.be.false();
    isObject(new Array(2)).should.be.false();
    isObject({}).should.be.true();
    isObject(new Object()).should.be.true();
    isObject(new Function()).should.be.false();
    isObject(null).should.be.false();
    isObject(undefined).should.be.false();
  });
  it('test isEmptyObject', function () {
    let o = {};
    o['0'] = 1;
    isEmptyObject({}).should.be.true();
    isEmptyObject({ a: 1 }).should.be.false();
    isEmptyObject(o).should.be.false();
  });
  it('test isEmptyObjectLike', function () {
    isEmptyObjectLike([]).should.be.true();
    // isEmptyObjectLike(new Array(2)).should.be.false();
    isEmptyObjectLike({}).should.be.true();
    isEmptyObjectLike(new Object()).should.be.true();
    isEmptyObjectLike(new Function()).should.be.false();
    isEmptyObjectLike(null).should.be.false();
    isEmptyObjectLike(undefined).should.be.false();
  });
})
