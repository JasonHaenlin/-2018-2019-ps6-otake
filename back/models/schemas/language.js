const BaseModels = require('./baseModels');

module.exports = new BaseModels('language', t => {
  t.integer('university_id').references('id').inTable('exchange_university');
  t.string('language', 20);
  t.enum('level', ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  t.primary(['university_id', 'language']);
});
