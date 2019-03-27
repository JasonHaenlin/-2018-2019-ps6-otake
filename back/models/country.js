const BaseModel = require('./base-model.js');

module.exports = new BaseModel('country', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('area_id').references('id').inTable('geographical_area');
},
[
  { id: 0, name: 'Chine', area_id: 1 },
  { id: 1, name: 'Amérique', area_id: 2 }
]);
