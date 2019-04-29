const BaseModel = require('./base-model.js');

module.exports = new BaseModel('past_contract', t => {
  t.increments('id').primary();
  t.integer('year');
  t.string('semester', 4);
  t.integer('university_id').references('id').inTable('exchange_university');
  t.integer('speciality_id');
  t.string('link', 255);
},
[
  {
    id: 1,
    year: 2019,
    semester: 's1',
    university_id: 5,
    speciality_id: 4,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '
  },
  {
    id: 2,
    year: 2017,
    semester: 's1',
    university_id: 7,
    speciality_id: 4,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '
  },
  {
    id: 3,
    year: 2017,
    semester: 's1',
    university_id: 1,
    speciality_id: 1,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '

  },
  {
    id: 4,
    year: 2016,
    semester: 's1',
    university_id: 19,
    speciality_id: 0,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '
  },
  {
    id: 5,
    year: 2016,
    semester: 'full',
    university_id: 0,
    speciality_id: 3,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '
  },
  {
    id: 6,
    year: 2016,
    semester: 'full',
    university_id: 31,
    speciality_id: 2,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '
  },
  {
    id: 7,
    year: 2015,
    semester: 's2',
    university_id: 42,
    speciality_id: 5,
    link: 'https://otakedev.com/share/contrats/contrat-etude-sample.pdf '
  }

]);
