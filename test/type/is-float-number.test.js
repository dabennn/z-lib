import isFloatNumber from '../../src/type/isFloatNumber.js';
const should = require('should')

describe(`test method 'isFloatNumber'`, function () {
  it('value to check is float nubmer', function () {
    isFloatNumber(1).should.be.false();
    isFloatNumber(.1).should.be.true();
    isFloatNumber(-1.1).should.be.true();
  });
})
