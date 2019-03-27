const BaseModel = require('./base-model.js');

module.exports = new BaseModel('city', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('country_id').references('id').inTable('country');
},
[
  { id: 0, name: 'HongKong', country_id: 0 },
  { id: 1, name: 'Pasadena', country_id: 1 }
]);
