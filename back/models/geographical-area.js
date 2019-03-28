const BaseModel = require('./base-model');

module.exports = new BaseModel('geographical_area', t => {
  t.increments('id').primary();
  t.string('name', 30).unique();
  t.string('shorthand', 10);
  t.string('icon', 255);
},
[
  { id: 0, name: 'Europe', shorthand: 'EU' },
  { id: 1, name: 'Asie', shorthand: 'AS' },
  { id: 2, name: 'Amérique du Nord', shorthand: 'NA' },
  { id: 3, name: 'Amérique du Sud', shorthand: 'SA' },
  { id: 4, name: 'Afrique', shorthand: 'AF' },
  { id: 5, name: 'Océanie', shorthand: 'OC' }
]);
