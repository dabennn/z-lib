const { isNumber, isFloatNumber, isEvenNumber } = require('../../dist/bee');
const should = require('should');

describe('determine number type', function () {
  it('test isNumber', function () {
    isNumber(0.1).should.be.equal(true);
    isNumber(1).should.be.equal(true);
    isNumber(new Number('1')).should.be.equal(true);
    isNumber('1').should.be.equal(false);
    isNumber([1]).should.be.equal(false);
    isNumber({a: 1}).should.be.equal(false);
    isNumber(null).should.be.equal(false);
    isNumber(undefined).should.be.equal(false);
    isNumber(new Function('return 1')).should.be.equal(false);
  });
  it('test isFloatNumber', function () {
    isFloatNumber(1).should.be.equal(false);
    isFloatNumber(.1).should.be.equal(true);
    isFloatNumber(-1.1).should.be.equal(true);
  });
  it('test isEvenNumber', function () {
    isEvenNumber(1).should.be.equal(false);
    isEvenNumber(1.1).should.be.equal(false);
    isEvenNumber(2).should.be.equal(true);
    isEvenNumber(0).should.be.equal(true);
  });
})

