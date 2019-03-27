const BaseModels = require('./baseModels');

module.exports = new BaseModels('courses', t => {
  t.increments('id').primary();
  t.increments('major_spec_id').references('id').inTable('major_speciality');
});
