const { Url, UrlSearchParams } = require('../../dist/z');
const should = require('should');

describe('parse url', function () {
  it('test class Url and class methods', function () {
    const _url = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string&q=1&q=3#hash';
    const url = new Url(_url);
    url.href.should.be.String().and.equal(_url);
    url.origin.should.be.String().and.equal('https://sub.host.com:8080');
    url.protocol.should.be.String().and.equal('https:');
    url.username.should.be.String().and.equal('user');
    url.password.should.be.String().and.equal('pass');
    url.host.should.be.String().and.equal('sub.host.com:8080');
    url.hostname.should.be.String().and.equal('sub.host.com');
    url.port.should.be.String().and.equal('8080');
    url.pathname.should.be.String().and.equal('/p/a/t/h');
    url.search.should.be.String().and.equal('?query=string&q=1&q=3');
    url.hash.should.be.String().and.equal('#hash');

    url.searchParams.append('a', 1).should.be.String().and.equal('query=string&q=1&q=3&a=1');
    url.searchParams.delete('query').should.be.String().and.equal('q=1&q=3&a=1');
    url.searchParams.get('q').should.be.String().and.equal('1');
    url.searchParams.getAll('q').should.be.Array().and.eql(['1', '3']);
    url.searchParams.has('query').should.be.Boolean().and.false();
    url.searchParams.has('q').should.be.Boolean().and.true();
    url.searchParams.set('a', 'abc').should.be.String().and.equal('q=1&q=3&a=abc');
  });
  it('test class UrlSearchParams', function () {

  });
})
