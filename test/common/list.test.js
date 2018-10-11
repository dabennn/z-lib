import list from '../../src/common/list.js';
const should = require('should');

describe(`test method 'list'`, function () {
  it('generate an array that length is 6 and each item is number 0', function () {
    const a = [0, 0, 0, 0, 0, 0];
    list(6, 0).should.be.eql(a);
    list(6, () => {
      return 0;
    }).should.be.eql(a);
  });
})
