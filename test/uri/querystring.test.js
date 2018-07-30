const { qs } = require('../../dist/z');
const should = require('should');

const stringify = qs.stringify;
const parse = qs.parse;

describe('transform uri', function () {
  it('stringify object to query string', function () {
    const a = [1, 2];
    a.b = 'abc';
    a.c = { d: 1 };
    const o = {
      a: 1,
      b: [2, 3],
    };
    stringify(a).should.be.String().and.be.equal('0=1&1=2&b=abc&c=');
    stringify(o).should.be.String().and.be.equal('a=1&b=2&b=3');
  });
  it('parse url query to object', function () {
    const str1 = '0=1&1=2&b=abc&c=';
    const str2 = 'a=1&b=2&b=3';
    const parsed1 = parse(str1);
    const parsed2 = parse(str2);
    parsed1.should.be.Object();
    parsed1['0'].should.be.String().and.equal('1');
    parsed1['1'].should.be.String().and.equal('2');
    parsed1['b'].should.be.String().and.equal('abc');
    parsed1['c'].should.be.String().and.equal('');

    parsed2.should.be.Object();
    parsed2['a'].should.be.String().and.equal('1');
    parsed2['b'].should.be.Array();
    parsed2['b'][0].should.be.String().and.equal('2');
    parsed2['b'][1].should.be.String().and.equal('3');
  });
})
