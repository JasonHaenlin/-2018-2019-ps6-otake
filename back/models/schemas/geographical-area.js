const BaseModels = require('./base-model');

module.exports = new BaseModels('geographical_area', t => {
  t.increments('id').primary();
  t.string('name', 30).unique();
  t.string('shorthand', 10);
  t.string('icon', 255);
});
