const BaseModel = require('./base-model');

module.exports = new BaseModel('study_departement', t => {
  t.integer('university_id').references('id').inTable('exchange_university');
  t.integer('study_id').references('id').inTable('major');
  t.primary(['university_id', 'study_id']);
},
[
  { university_id: 0, study_id: 0 },
  { university_id: 0, study_id: 1 },
  { university_id: 0, study_id: 2 },
  { university_id: 0, study_id: 3 },
  { university_id: 0, study_id: 4 },
  { university_id: 1, study_id: 2 },
  { university_id: 1, study_id: 3 },
  { university_id: 1, study_id: 5 },
  { university_id: 1, study_id: 6 }
]);
