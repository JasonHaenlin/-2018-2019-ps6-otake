const BaseModel = require('./base-model');

module.exports = new BaseModel('courses', t => {
  t.increments('id').primary();
  t.increments('major_spec_id').references('id').inTable('major_speciality');
});
