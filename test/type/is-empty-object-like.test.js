import isEmptyObjectLike from '../../src/type/isEmptyObjectLike.js';
const should = require('should');

describe(`test method 'isEmptyObjectLike'`, function () {
  it('value to check is empty object like', function () {
    isEmptyObjectLike([]).should.be.true();
    isEmptyObjectLike(new Array(2)).should.be.true();
    isEmptyObjectLike({}).should.be.true();
    isEmptyObjectLike(new Object()).should.be.true();
    isEmptyObjectLike(new Function()).should.be.false();
    isEmptyObjectLike(null).should.be.false();
    isEmptyObjectLike(undefined).should.be.false();
  });
})
