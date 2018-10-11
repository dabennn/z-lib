import isBoolean from '../../src/type/isBoolean.js';
const should = require('should');

describe(`test method 'isBoolean'`, function () {
  it('value to check is boolean', () => {
    isBoolean(true).should.be.true();
    isBoolean(false).should.be.true();
    isBoolean(1).should.be.false();
    isBoolean('1').should.be.false();
    isBoolean(null).should.be.false();
    isBoolean(undefined).should.be.false();
    isBoolean(new Function).should.be.false();
  });
})
