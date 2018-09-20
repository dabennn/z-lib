const {
  firstUpper,
  trim,
  camelCase,
  capitalize,
} = require('../../dist/z');
const should = require('should');

describe('common string methods', function () {
  it('change first character to uppercase', function () {
    firstUpper('abcd').should.be.a.String().and.be.eql('Abcd');
    firstUpper('abcd efg').should.be.a.String().and.be.eql('Abcd efg');
  });
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
  it('transform string to camelcase', function () {
    camelCase('  a-b_cd efg  ').should.be.a.String().and.be.eql('aBCdEfg');
  });
  it('transform string to capitalize', function () {
    capitalize('  a BCD  ').should.be.a.String().and.be.eql('A bcd');
  });
})
