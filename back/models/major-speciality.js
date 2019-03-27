const BaseModel = require('./base-model');

module.exports = new BaseModel('major_speciality', t => {
  t.increments('id').primary();
  t.increments('major_id').references('id').inTable('major');
  t.increments('speciality_id').references('id').inTable('speciality');
});
