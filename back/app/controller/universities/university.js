// simple example using objection and knex
const { ExchangeUniversity } = require('../../middlewares/orm');

module.exports = {
  getUniversitiesShortInfo() {
    return ExchangeUniversity.query()
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
      .eager('[major, language]')
      .then(res => {
        res.forEach(r => {
          const major = [];
          const language = [];
          r.major.forEach(m => major.push(m.title));
          r.language.forEach(l => language.push(l.language));
          r.major = major;
          r.language = language;
        });
        return res;
      });
  }
};
