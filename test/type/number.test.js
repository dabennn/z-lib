const { isNumber, isFloatNumber, isEvenNumber } = require('../../dist/bee');
const should = require('should');

describe('determine number type', function () {
  it('test isNumber', function () {
    isNumber(0.1).should.be.true();
    isNumber(1).should.be.true();
    isNumber(new Number('1')).should.be.true();
    isNumber('1').should.be.false();
    isNumber([1]).should.be.false();
    isNumber({a: 1}).should.be.false();
    isNumber(null).should.be.false();
    isNumber(undefined).should.be.false();
    isNumber(new Function('return 1')).should.be.false();
  });
  it('test isFloatNumber', function () {
    isFloatNumber(1).should.be.false();
    isFloatNumber(.1).should.be.true();
    isFloatNumber(-1.1).should.be.true();
  });
  it('test isEvenNumber', function () {
    isEvenNumber(1).should.be.false();
    isEvenNumber(1.1).should.be.false();
    isEvenNumber(2).should.be.true();
    isEvenNumber(0).should.be.true();
  });
})

