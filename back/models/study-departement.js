const BaseModel = require('./base-model');

module.exports = new BaseModel('study_departement', t => {
  t.integer('university_id').references('id').inTable('exchange_university');
  t.integer('study_id').references('id').inTable('major');
  t.primary(['university_id', 'study_id']);
},
[
  { university_id: 0, study_id: 0 },
  { university_id: 1, study_id: 0 },
  { university_id: 2, study_id: 0 },
  { university_id: 3, study_id: 0 },
  { university_id: 4, study_id: 0 },
  { university_id: 5, study_id: 0 },
  { university_id: 6, study_id: 0 },
  { university_id: 7, study_id: 0 },
  { university_id: 8, study_id: 0 },
  { university_id: 9, study_id: 0 },
  { university_id: 10, study_id: 0 },
  { university_id: 11, study_id: 0 },
  { university_id: 12, study_id: 0 },
  { university_id: 13, study_id: 0 },
  { university_id: 14, study_id: 0 },
  { university_id: 15, study_id: 0 },
  { university_id: 16, study_id: 0 },
  { university_id: 17, study_id: 0 },
  { university_id: 18, study_id: 0 },
  { university_id: 19, study_id: 0 },
  { university_id: 20, study_id: 1 },
  { university_id: 20, study_id: 2 },
  { university_id: 20, study_id: 3 },
  { university_id: 20, study_id: 4 },
  { university_id: 20, study_id: 6 },
  { university_id: 20, study_id: 7 },
  { university_id: 21, study_id: 3 },
  { university_id: 21, study_id: 2 },
  { university_id: 21, study_id: 1 },
  { university_id: 21, study_id: 4 },
  { university_id: 22, study_id: 2 },
  { university_id: 22, study_id: 1 },
  { university_id: 23, study_id: 3 },
  { university_id: 24, study_id: 0 },
  { university_id: 25, study_id: 0 },
  { university_id: 26, study_id: 2 },
  { university_id: 27, study_id: 3 },
  { university_id: 28, study_id: 1 },
  { university_id: 28, study_id: 6 },
  { university_id: 29, study_id: 2 },
  { university_id: 29, study_id: 3 },
  { university_id: 30, study_id: 3 },
  { university_id: 31, study_id: 0 },
  { university_id: 32, study_id: 6 },
  { university_id: 33, study_id: 4 },
  { university_id: 34, study_id: 1 },
  { university_id: 35, study_id: 3 },
  { university_id: 35, study_id: 2 },
  { university_id: 36, study_id: 3 },
  { university_id: 36, study_id: 2 },
  { university_id: 37, study_id: 1 },
  { university_id: 37, study_id: 4 },
  { university_id: 38, study_id: 1 },
  { university_id: 38, study_id: 4 },
  { university_id: 39, study_id: 1 },
  { university_id: 39, study_id: 3 },
  { university_id: 40, study_id: 1 },
  { university_id: 40, study_id: 5 },
  { university_id: 41, study_id: 2 },
  { university_id: 42, study_id: 1 },
  { university_id: 42, study_id: 6 },
  { university_id: 43, study_id: 1 },
  { university_id: 43, study_id: 4 },
  { university_id: 44, study_id: 3 },
  { university_id: 45, study_id: 1 },
  { university_id: 46, study_id: 1 },
  { university_id: 47, study_id: 0 },
  { university_id: 48, study_id: 3 },
  { university_id: 49, study_id: 4 },
  { university_id: 50, study_id: 0 },
  { university_id: 51, study_id: 4 },
  { university_id: 52, study_id: 1 },
  { university_id: 52, study_id: 4 },
  { university_id: 52, study_id: 6 },
  { university_id: 53, study_id: 1 },
  { university_id: 53, study_id: 4 },
  { university_id: 54, study_id: 3 },
  { university_id: 54, study_id: 2 },
  { university_id: 55, study_id: 3 },
  { university_id: 56, study_id: 3 },
  { university_id: 57, study_id: 1 },
  { university_id: 57, study_id: 4 },
  { university_id: 57, study_id: 6 },
  { university_id: 58, study_id: 1 },
  { university_id: 59, study_id: 3 },
  { university_id: 60, study_id: 4 },
  { university_id: 61, study_id: 1 },
  { university_id: 62, study_id: 2 },
  { university_id: 63, study_id: 2 },
  { university_id: 64, study_id: 4 },
  { university_id: 65, study_id: 1 },
  { university_id: 66, study_id: 1 },
  { university_id: 67, study_id: 1 },
  { university_id: 68, study_id: 1 },
  { university_id: 69, study_id: 1 },
  { university_id: 69, study_id: 4 },
  { university_id: 70, study_id: 1 }
]);
