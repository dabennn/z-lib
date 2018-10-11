import randomItem from '../../src/common/randomItem.js';
const should = require('should');

describe(`test method 'randomItem'`, function () {
  it('get random item form an array', function () {
    const a = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i < 50; i++) {
      randomItem(a).should.be.oneOf(a);
    }
  });
})
