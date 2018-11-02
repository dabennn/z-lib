import splice from '../../src/common/splice.js';
const should = require('should');

describe(`test method 'splice'`, function () {
  const str = 'abcdefg';
  const arr = [1, 2, 3, 4, 5];
  it('string to splice', function () {
    splice(str).should.be.String().and.equal('abcdefg');
    splice(str, 2).should.be.String().and.equal('ab');
    splice(str, 2, 2).should.be.String().and.equal('abefg');
    splice(str, 2, 2, 'xy').should.be.String().and.equal('abxyefg');
  });
  it('array to splice', function () {
    splice(arr).should.be.Array().and.eql([1, 2, 3, 4, 5]);
    splice(arr, 2).should.be.Array().and.eql([1, 2]);
    splice(arr, 2, 2).should.be.Array().and.eql([1, 2, 5]);
    splice(arr, 2, 2, 'xy').should.be.Array().and.eql([1, 2, 'xy', 5]);
  });
})
