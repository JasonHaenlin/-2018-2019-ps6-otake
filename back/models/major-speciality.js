const BaseModel = require('./base-model');

module.exports = new BaseModel('major_speciality', t => {
  t.increments('id').primary();
  t.integer('major_id').references('id').inTable('major');
  t.integer('speciality_id').references('id').inTable('speciality');
},
[
  { id: 0, major_id: 1, speciality_id: 0},
  { id: 1, major_id: 1, speciality_id: 1},
  { id: 2, major_id: 1, speciality_id: 2},
  { id: 3, major_id: 1, speciality_id: 3},
  { id: 4, major_id: 1, speciality_id: 4},
  { id: 5, major_id: 1, speciality_id: 5},
  { id: 6, major_id: 6, speciality_id: 4},
  { id: 7, major_id: 6, speciality_id: 5}
]);
