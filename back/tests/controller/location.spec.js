require('../../server');
const assert = require('assert');

const { City, GeographicalArea, Country } = require('../../app/middlewares/orm');


describe('city controller to database', () => {
  it('should get the list of city from the database', async () => {
    const res = await City.query();
    assert.ok(res.length > 0);
  });
  it('should get the list of city join with country from the database', async () => {
    const res = await City.query()
      .alias('c')
      .select('c.city_name as city', 'n.country_name as country')
      .joinRelation('country', { alias: 'n' });
    assert.ok(res.length > 0);
    assert.ok(res[0].city);
    assert.ok(res[0].country);
  });
  it('should get the list of city join with country self join with area from the database', async () => {
    const res = await City.query()
      .alias('ci')
      .select('ci.city_name as city', 'country.country_name as country', 'country:geographical_area.area_name as area')
      .joinRelation('country.geographical_area');
    assert.ok(res.length > 0);
    assert.ok(res[0].city);
    assert.ok(res[0].country);
    assert.ok(res[0].area);
  });
});

describe('country controller to database', () => {
  it('should get the list of country from the database', async () => {
    const res = await Country.query();
    assert.ok(res.length > 0);
  });
  it('should get the list of country join with geographical_area from the database', async () => {
    const res = await Country.query()
      .alias('c')
      .select('c.id', 'c.country_name as city', 'geographical_area.area_name as area', 'geographical_area.shorthand')
      .joinRelation('geographical_area');
    assert.ok(res.length > 0);
    assert.ok(res[0].city);
    assert.ok(res[0].area);
  });
});

describe('area controller to database', () => {
  it('should get the list of area from the database', async () => {
    const res = await GeographicalArea.query();
    assert.ok(res.length > 0);
  });
});
