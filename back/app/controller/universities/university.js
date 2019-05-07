// simple example using objection and knex
const {
  ExchangeUniversity,
  Language,
  Major,
  GeographicalArea
} = require('../../middlewares/orm/models');

module.exports = {
  getUniversitiesShortInfo(page, area, language, major, search) {
    return ExchangeUniversity.query()
      .alias('u')
      .distinct('u.id',
        'u.name',
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
          queryBuilder.where('city:country:geographical_area.shorthand', area);
        }
        if (language) {
          queryBuilder.where('language.language', language);
        }
        if (major) {
          queryBuilder.whereIn('major.shorthand', [major, 'ALL']);
        }
        if (search) {
          queryBuilder.where('u.name', 'LIKE', '%'+search+'%');
        }
      })
      .eager('[major, language]')
      .page(page, 15)
      .then(res => {
        res.results.forEach(r => {
          const major = [];
          r.major.forEach(m => major.push(m.shorthand));
          r.major = major;
          r.area = Object.assign({}, { id: r.area_id, name: r.area, shorthand: r.shorthand, icon: r.icon });
          delete r.area_id;
          delete r.shorthand;
          delete r.icon;
        });
        return res.results;
      });
  },

  getLanguages() {
    return Language.query();
  },

  getMajors() {
    return Major.query()
      .whereNot({ 'major.shorthand': 'ALL' });
  },

  getAreas() {
    return GeographicalArea.query();
  },

  getUniversityDetails(id) {
    return ExchangeUniversity.query()
      .select('name', 'big_picture', 'presentation_text', 'admission_text', 'student_life_text', 'cost_of_living_text')
      .where({ 'exchange_university.id': id })
      .joinEager('testimonial')
      .first();
  }
};
