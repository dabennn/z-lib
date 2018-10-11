import get from '../../src/common/get.js';
const should = require('should');

const user = {
  name: 'nick',
  age: 18,
  fav: ['sleep', 'eat'],
  assets: {
    cash: 1000,
    car: {
      brand: 'BMW',
      cost: 300000,
    },
  },
};

describe(`test method 'get'`, function () {
  it('use string expression', function () {
    get(user, 'name').should.be.String().and.be.equal('nick');
    get(user, 'age').should.be.Number().and.be.equal(18);
    get(user, 'fav[1]').should.be.String().and.be.equal('eat');
    get(user, 'assets.car.cost').should.be.Number().and.be.equal(300000);
    should(get(user, 'assets.car.count')).be.Undefined();
    get(user, 'assets.car.count', '0').should.be.String().and.be.equal('0');
  });

  it('use array expression', function () {
    const cash = 'cash';
    get(user, ['name']).should.be.String().and.be.equal('nick');
    get(user, ['age']).should.be.Number().and.be.equal(18);
    get(user, ['fav', 1]).should.be.String().and.be.equal('eat');
    get(user, ['assets', cash]).should.be.Number().and.be.equal(1000);
    get(user, ['assets', 'car', 'cost']).should.be.Number().and.be.equal(300000);
    should(get(user, ['assets', 'car', 'count'])).be.Undefined();
    get(user, ['assets', 'car', 'count'], '0').should.be.String().and.be.equal('0');
  });
})
