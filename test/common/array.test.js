const { list, randomItem } = require('../../dist/bee');
const should = require('should');

describe('common array methods', function () {
  it('generate an array that length is 6 and each item is number 0', function () {
    const a = [0, 0, 0, 0, 0, 0];
    list(6, 0).should.be.eql(a);
    list(6, () => {
      return 0;
    }).should.be.eql(a);
  });
  it('get random item form an array', function () {
    const a = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i < 50; i++) {
      randomItem(a).should.be.oneOf(a);
    }
  });
})

