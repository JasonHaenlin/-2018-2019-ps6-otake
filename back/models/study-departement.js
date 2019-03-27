const BaseModel = require('./base-model');

module.exports = new BaseModel('study_departement', t => {
  t.number('university_id').references('id').inTable('exchange_university');
  t.number('study_id').references('id').inTable('major');
  t.primary(['university_id', 'study_id']);
},
[
  { university_id: 1, study_id: 1 }
]);
