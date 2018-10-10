import isObjectLike from '../../src/type/isObjectLike.js';
const should = require('should');

describe(`test method 'isObjectLike'`, function () {
  it('value to check is object like', function () {
    isObjectLike(1).should.be.false();
    isObjectLike('1').should.be.false();
    isObjectLike(new Number(2)).should.be.true();
    isObjectLike(new String(2)).should.be.true();
    isObjectLike([]).should.be.true();
    isObjectLike(new Array(2)).should.be.true();
    isObjectLike({}).should.be.true();
    isObjectLike(new Object()).should.be.true();
    isObjectLike(new Function()).should.be.true();
    isObjectLike(null).should.be.false();
    isObjectLike(undefined).should.be.false();
  });
})
