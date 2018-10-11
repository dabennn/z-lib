import firstUpper from '../../src/common/firstUpper.js';
const should = require('should');

describe(`test method 'firstUpper'`, function () {
  it('change first character to uppercase', function () {
    firstUpper('abcd').should.be.a.String().and.be.eql('Abcd');
    firstUpper('abcd efg').should.be.a.String().and.be.eql('Abcd efg');
  });
})
