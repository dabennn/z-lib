// const { is } = require('../../dist/z');
// const should = require('should');

// describe('test method \'is\'', function () {
//   it('is String', () => {
//     is(1, 'String').should.be.false();
//     is('1', 'String').should.be.true();
//     is(new String('1'), 'String').should.be.true();
//     is([1], 'String').should.be.false();
//     is({a: 1}, 'String').should.be.false();
//     is(null, 'String').should.be.false();
//     is(undefined, 'String').should.be.false();
//     is(new Function('return 1'), 'String').should.be.false();
//   });
//   it('is Boolean', () => {
//     is(true, 'Boolean').should.be.true();
//     is(false, 'Boolean').should.be.true();
//     is(1, 'Boolean').should.be.false();
//     is('1', 'Boolean').should.be.false();
//     is(null, 'Boolean').should.be.false();
//     is(undefined, 'Boolean').should.be.false();
//     is(new Function(), 'Boolean').should.be.false();
//   });
//   it('is Null', () => {
//     is(true, 'Null').should.be.false();
//     is(false, 'Null').should.be.false();
//     is(null, 'Null').should.be.true();
//     is(undefined, 'Null').should.be.false();
//   });
//   it('is Undefined', () => {
//     is(true, 'Undefined').should.be.false();
//     is(false, 'Undefined').should.be.false();
//     is(null, 'Undefined').should.be.false();
//     is(undefined, 'Undefined').should.be.true();
//   });
// })
