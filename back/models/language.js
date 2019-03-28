const BaseModel = require('./base-model');

module.exports = new BaseModel('language', t => {
  t.integer('university_id').references('id').inTable('exchange_university');
  t.string('language', 20);
  t.enum('level', ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  t.primary(['university_id', 'language']);
},
[
  { university_id: 0, language: 'Anglais', level: 'B1' },
  { university_id: 1, language: 'Cantonais', level: 'B1' },
  { university_id: 1, language: 'Anglais', level: 'B2' }
]);
