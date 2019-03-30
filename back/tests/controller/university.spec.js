require('../../server');
const assert = require('assert');

const { ExchangeUniversity } = require('../../app/middlewares/orm');

const { university } = require('../../app/controller/universities');


describe('ExchangeUniversity controller to database', () => {
  it('should get the list of ExchangeUniversity from the database', async () => {
    const res = await ExchangeUniversity.query();
    assert.ok(res.length > 0);
  });
  it('should get the list of ExchangeUniversity join with city/country/area from the database', async () => {
    const res = await ExchangeUniversity.query()
      .alias('u')
      .select('u.name', 'city.city_name as city',
        'city:country.country_name as country',
        'city:country:geographical_area.area_name as area')
      .joinRelation('city.country.geographical_area');

    assert.ok(res.length > 0);
    assert.ok(res[0].name);
    assert.ok(res[0].city);
    assert.ok(res[0].country);
    assert.ok(res[0].area);
  });
  it('should get the list of ExchangeUniversity join with language from the database', async () => {
    const res = await ExchangeUniversity.query()
      .alias('u')
      .select('u.name')
      .joinEager('language');
    assert.ok(res.length > 0);
    assert.ok(res[0].name);
    assert.ok(res[0].language);
  });
  it('should get the list of ExchangeUniversity join with language from the database', async () => {
    const res = await ExchangeUniversity.query()
      .alias('u')
      .select('u.name')
      .joinEager('major');

    assert.ok(res.length > 0);
    assert.ok(res[0].name);
    assert.ok(res[0].major);
  });
  it('should get the list of ExchangeUniversity join with all from the database', async () => {
    const res = await ExchangeUniversity.query()
      .alias('u')
      .select('u.name', 'city.city_name as city',
        'city:country.country_name as country',
        'city:country:geographical_area.area_name as area')
      .joinRelation('city.country.geographical_area')
      .joinEager('[major, language]');

    assert.ok(res.length > 0);
    assert.ok(res[0].name);
    assert.ok(res[0].city);
    assert.ok(res[0].country);
    assert.ok(res[0].area);
    assert.ok(res[0].major);
  });
  it('should get the list of ExchangeUniversity card model from the database', async () => {
    const res = await ExchangeUniversity.query()
      .alias('u')
      .select('u.name', 'city.city_name as city',
        'city:country.country_name as country',
        'city:country:geographical_area.area_name as area')
      .joinRelation('city.country.geographical_area')
      .eager('[major(titleOnly), language(languageOnly)]');
    assert.ok(res.length > 0);
  });
  it('should get the list of ExchangeUniversity card model from the database', async () => {
    const res = await ExchangeUniversity.query()
      .alias('u')
      .select('u.name',
        'u.admission_rate',
        'u.type_of_file',
        'u.cost_of_living',
        'u.small_picture',
        'city.city_name as city',
        'city:country.country_name as country',
        'city:country:geographical_area.area_name as area')
      .joinRelation('city.country.geographical_area')
      .eager('[major, language]');
    res.forEach(r => {
      const major = [];
      const language = [];
      r.major.forEach(m => major.push(m.title));
      r.language.forEach(l => language.push(l.language));
      r.major = major;
      r.language = language;
    });

    assert.ok(res.length > 0);
  });
  it('should get the list of ExchangeUniversity card from the database', async () => {
    const res = await university.getUniversitiesShortInfo();
    assert.ok(res.length > 0);
  });
});
