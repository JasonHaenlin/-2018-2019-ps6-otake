const BaseModels = require('./base-model');

module.exports = new BaseModels('city', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('country_id').references('id').inTable('country');
});
