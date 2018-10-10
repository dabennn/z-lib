import isEvenNumber from '../../src/type/isEvenNumber.js';
const should = require('should');

describe(`test method 'isEvenNumber'`, function () {
  it('value to check is even number', function () {
    isEvenNumber(1).should.be.false();
    isEvenNumber(1.1).should.be.false();
    isEvenNumber(2).should.be.true();
    isEvenNumber(0).should.be.true();
  });
})
