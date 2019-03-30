const BaseModel = require('./base-model');

module.exports = new BaseModel('geographical_area', t => {
  t.increments('id').primary();
  t.string('area_name', 30).unique();
  t.string('shorthand', 10);
  t.string('icon', 255);
},
[
  { id: 0, area_name: 'Europe', shorthand: 'EU', icon: '' },
  { id: 1, area_name: 'Asie', shorthand: 'AS', icon: '' },
  { id: 2, area_name: 'Amérique du Nord', shorthand: 'NA', icon: '' },
  { id: 3, area_name: 'Amérique du Sud', shorthand: 'SA', icon: '' },
  { id: 4, area_name: 'Afrique', shorthand: 'AF', icon: '' },
  { id: 5, area_name: 'Océanie', shorthand: 'OC', icon: '' }
]);
