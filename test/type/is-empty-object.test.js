import isEmptyObject from '../../src/type/isEmptyObject.js';
const should = require('should');

describe(`test method 'isEmptyObject'`, function () {
  it('value to check is empty object', function () {
    let o = {};
    o['0'] = 1;
    isEmptyObject({}).should.be.true();
    isEmptyObject({ a: 1 }).should.be.false();
    isEmptyObject(o).should.be.false();
  });
})
