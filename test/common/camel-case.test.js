import camelCase from '../../src/common/camelCase.js';
const should = require('should');

describe(`test method 'camelCase'`, function () {
  it('transform string to camelcase', function () {
    camelCase('  a-b_cd efg  ').should.be.a.String().and.be.eql('aBCdEfg');
  });
})
