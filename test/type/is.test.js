const { is } = require('../../dist/bee');
const should = require('should');

describe('test method \'is\'', function () {
  it('is String', () => {
    is(1, 'String').should.be.equal(false);
    is('1', 'String').should.be.equal(true);
    is(new String('1'), 'String').should.be.equal(true);
    is([1], 'String').should.be.equal(false);
    is({a: 1}, 'String').should.be.equal(false);
    is(null, 'String').should.be.equal(false);
    is(undefined, 'String').should.be.equal(false);
    is(new Function('return 1'), 'String').should.be.equal(false);
  });
  it('is Boolean', () => {
    is(true, 'Boolean').should.be.equal(true);
    is(false, 'Boolean').should.be.equal(true);
    is(1, 'Boolean').should.be.equal(false);
    is('1', 'Boolean').should.be.equal(false);
    is(null, 'Boolean').should.be.equal(false);
    is(undefined, 'Boolean').should.be.equal(false);
    is(new Function(), 'Boolean').should.be.equal(false);
  });
  it('is Null', () => {
    is(true, 'Null').should.be.equal(false);
    is(false, 'Null').should.be.equal(false);
    is(null, 'Null').should.be.equal(true);
    is(undefined, 'Null').should.be.equal(false);
  });
  it('is Undefined', () => {
    is(true, 'Undefined').should.be.equal(false);
    is(false, 'Undefined').should.be.equal(false);
    is(null, 'Undefined').should.be.equal(false);
    is(undefined, 'Undefined').should.be.equal(true);
  });
})
