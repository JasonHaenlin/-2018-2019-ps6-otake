const BaseModels = require('./baseModels');

module.exports = new BaseModels('major_speciality', t => {
  t.increments('id').primary();
  t.increments('major_id').references('id').inTable('major');
  t.increments('speciality_id').references('id').inTable('speciality');
});
