import trim from '../../src/common/trim.js';
const should = require('should');

describe(`test method 'trim'`, function () {
  it('remove both side space of string', function () {
    trim('  a bcd  ').should.be.a.String().and.be.eql('a bcd');
  });
  it('remove left side space of string', function () {
    trim('  a bcd  ', 'start').should.be.a.String().and.be.eql('a bcd  ');
  });
  it('remove right side space of string', function () {
    trim('  a bcd  ', 'end').should.be.a.String().and.be.eql('  a bcd');
  });
  it('remove all space of string', function () {
    trim('  a bcd  ', 'all').should.be.a.String().and.be.eql('abcd');
  });
})
