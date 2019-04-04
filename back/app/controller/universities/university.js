// simple example using objection and knex
const { ExchangeUniversity } = require('../../middlewares/orm');

module.exports = {
  getUniversitiesShortInfo(area, language, major) {
    return ExchangeUniversity.query()
      .alias('u')
      .distinct('u.name',
        'u.admission_rate',
        'u.type_of_file',
        'u.cost_of_living',
        'u.nb_of_place',
        'u.small_picture',
        'city.city_name as city',
        'city:country.country_name as country',
        'city:country:geographical_area.id as area_id',
        'city:country:geographical_area.area_name as area',
        'city:country:geographical_area.shorthand',
        'city:country:geographical_area.icon')
      .select()
      .joinRelation('[city.country.geographical_area, major, language]')
      .modify((queryBuilder) => {
        if (area) {
          queryBuilder.where('city:country:geographical_area.area_name', area);
        }
        if (language) {
          queryBuilder.where('language.language', language);
        }
        if (major) {
          queryBuilder.where('major.shorthand', major);
        }
      })
      .eager('[major, language]')
      .then(res => {
        res.forEach(r => {
          const major = [];
          const language = [];
          r.major.forEach(m => major.push(m.shorthand));
          r.language.forEach(l => language.push(l.language));
          r.major = major;
          r.language = language;
          r.area = Object.assign({}, { id: r.area_id, name: r.area, shorthand: r.shorthand, icon: r.icon });
          delete r.area_id;
          delete r.shorthand;
          delete r.icon;
        });
        return res;
      });
  }
};
