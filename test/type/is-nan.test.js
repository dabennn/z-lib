import isNaN from '../../src/type/isNaN.js';
const should = require('should')

describe(`test method 'isNaN'`, function () {
  it('value to check is NaN', function () {
    isNaN(NaN).should.be.true();
    isNaN(Number({})).should.be.true();
    isNaN(-0).should.be.false();
    isNaN(1/0).should.be.false();
  });
})
