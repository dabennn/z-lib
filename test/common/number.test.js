const { random } = require('../../dist/bee');
const should = require('should');

should.use(function(should, Assertion) {
  Assertion.add('int', function() {
    this.params = { operator: 'to be int' };

    const num = this.obj;
    num.should.be.a.Number();
    parseInt(num, 10).should.be.equal(num);
 })

  Assertion.add('float', function() {
    this.params = { operator: 'to be float' };

    const num = this.obj;
    num.should.be.a.Number();
    parseInt(num, 10).should.not.be.equal(num);
 })
})

describe('common number methods', function () {
  it('get a random number between 0-7', function () {
    for (let i = 0; i < 50; i++) {
      random(7).should.be.aboveOrEqual(0).and.be.below(7).and.be.a.float();
      random(7, true).should.be.aboveOrEqual(0).and.be.below(7).and.be.a.int();
      random(7, 10).should.be.aboveOrEqual(7).and.be.below(10).and.be.a.float();
      random(7, 10, true).should.be.aboveOrEqual(7).and.be.below(10).and.be.a.int();
    }
  });
})

