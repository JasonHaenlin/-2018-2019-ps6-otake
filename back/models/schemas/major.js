const BaseModels = require('./baseModels');

module.exports = new BaseModels('major', t => {
  t.increments('id').primary();
  t.string('title', 50).unique();
  t.string('shorthand', 10).unique();
  t.string('icon', 100);
});
