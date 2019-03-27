const BaseModels = require('./base-model');

module.exports = new BaseModels('country', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('area_id').references('id').inTable('geographical_area');
});
