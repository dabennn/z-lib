const { isObject, isEmptyObject, isEmptyObjectLike, isObjectLike, deepClone } = require('../../dist/z');
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
    isEmptyObjectLike(new Array(2)).should.be.true();
    isEmptyObjectLike({}).should.be.true();
    isEmptyObjectLike(new Object()).should.be.true();
    isEmptyObjectLike(new Function()).should.be.false();
    isEmptyObjectLike(null).should.be.false();
    isEmptyObjectLike(undefined).should.be.false();
  });
  it('test isObjectLike', function () {
    isObjectLike(1).should.be.false();
    isObjectLike('1').should.be.false();
    isObjectLike(new Number(2)).should.be.true();
    isObjectLike(new String(2)).should.be.true();
    isObjectLike([]).should.be.true();
    isObjectLike(new Array(2)).should.be.true();
    isObjectLike({}).should.be.true();
    isObjectLike(new Object()).should.be.true();
    isObjectLike(new Function()).should.be.true();
    isObjectLike(null).should.be.false();
    isObjectLike(undefined).should.be.false();
  });
})

describe('methods to operate object', function () {
  it('test deepClone', function () {
    const a = {
      b: 1,
      c: [1, 2],
    };
    const b = deepClone(a);
    b.c[0] = 3;

    a.c[0].should.be.Number().and.be.equal(1);
    b.c[0].should.be.Number().and.be.equal(3);

    const c = [1, 2];
    c.d = 1;
    c.f = { g: 1 };
    const d = deepClone(c);
    d[0] = 3;
    d.d = 3;
    d.f.g = 3;

    c[0].should.be.Number().and.be.equal(1);
    d[0].should.be.Number().and.be.equal(3);
    c.d.should.be.Number().and.be.equal(1);
    d.d.should.be.Number().and.be.equal(3);
    c.f.g.should.be.Number().and.be.equal(1);
    d.f.g.should.be.Number().and.be.equal(3);
  });
})
