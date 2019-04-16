const BaseModel = require('./base-model.js');

module.exports = new BaseModel('past_contract', t => {
  t.increments('id').primary();
  t.integer('year');
  t.string('semester', 4);
  t.integer('university_id').references('id').inTable('exchange_university');
  t.string('shorthand', 10);
  t.string('link', 255);
},
[
  {
    id: 1,
    year: 2019,
    semester: 's1',
    university_id: 5,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'
  },
  {
    id: 2,
    year: 2017,
    semester: 's1',
    university_id: 7,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'
  },
  {
    id: 3,
    year: 2017,
    semester: 's1',
    university_id: 1,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'

  },
  {
    id: 4,
    year: 2016,
    semester: 's1',
    university_id: 19,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'
  },
  {
    id: 5,
    year: 2016,
    semester: 'full',
    university_id: 0,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'
  },
  {
    id: 6,
    year: 2016,
    semester: 'full',
    university_id: 31,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'
  },
  {
    id: 7,
    year: 2015,
    semester: 's2',
    university_id: 42,
    shorthand: 'SI',
    link: 'http://www.polytech.unice.fr/'
  }

]);
