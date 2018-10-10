import isSymbol from '../../src/type/isSymbol.js';
const should = require('should');

describe(`test method 'isSymbol'`, function () {
  it('value to check is symbol', function () {
    isSymbol('1').should.be.false();
    isSymbol(1).should.be.false();
    isSymbol(() => {}).should.be.false();
    isSymbol(true).should.be.false();
    isSymbol(Symbol(1)).should.be.true();
    isSymbol(Symbol('2')).should.be.true();
  });
});
