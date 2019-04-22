const BaseModel = require('./base-model');

module.exports = new BaseModel('deadline', t => {
  t.increments('id').primary();
  t.integer('opening_year');
  t.integer('closing_year');
  t.date('date');
  t.string('title', 50);
  t.string('details', 150);
},
[
  {
    id: 1,
    opening_year: 2018, closing_year: 2019,
    date: '2019-01-11',
    title: '1ère Session',
    details: 'Deadline de rendu de dossier PNS et UNS pour le 1er et 2ème semestre'
  },
  {
    id: 2,
    opening_year: 2018, closing_year: 2019,
    date: '2019-05-03',
    title: '2ème Session',
    details: 'Deadline de rendu de dossier PNS et UNS uniquement pour le 2ème semestre'
  }
]);
