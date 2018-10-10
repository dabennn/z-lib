import deepClone from '../../src/common/deepClone.js';
const should = require('should');

describe(`test method 'deepClone'`, function () {
  it('object been clone deep', function () {
    const a = {
      b: 1,
      c: [1, 2],
    };
    const b = deepClone(a);
    b.c[0] = 3;

    a.c[0].should.be.Number().and.be.equal(1);
    b.c[0].should.be.Number().and.be.equal(3);

    const c = [1, 2];
    c.d = 1;
    c.f = { g: 1 };
    const d = deepClone(c);
    d[0] = 3;
    d.d = 3;
    d.f.g = 3;

    c[0].should.be.Number().and.be.equal(1);
    d[0].should.be.Number().and.be.equal(3);
    c.d.should.be.Number().and.be.equal(1);
    d.d.should.be.Number().and.be.equal(3);
    c.f.g.should.be.Number().and.be.equal(1);
    d.f.g.should.be.Number().and.be.equal(3);
  });
})
