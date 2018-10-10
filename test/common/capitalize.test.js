import capitalize from '../../src/common/capitalize.js';
const should = require('should');

describe(`test method 'campitalize'`, function () {
  it('transform string to capitalize', function () {
    capitalize('  a BCD  ').should.be.a.String().and.be.eql('A bcd');
  });
})
