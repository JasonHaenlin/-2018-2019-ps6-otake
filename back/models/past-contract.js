const BaseModel = require('./base-model.js');

module.exports = new BaseModel('past_contract', t => {
  t.increments('id').primary();
  t.integer('year');
  t.string('semester', 2);
  t.integer('university_id').references('id').inTable('exchange_university');
  t.string('shorthand', 10);
  t.string('link', 255).unique();
});
