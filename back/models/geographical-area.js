const BaseModel = require('./base-model');

module.exports = new BaseModel('geographical_area', t => {
  t.increments('id').primary();
  t.string('area_name', 30).unique();
  t.string('shorthand', 10);
  t.string('icon', 255);
},
[
  { id: 0, area_name: 'Europe', shorthand: 'EU', icon: 'https://cdn.onlinewebfonts.com/svg/img_169113.png' },
  { id: 1, area_name: 'Asie', shorthand: 'AS', icon: 'https://cdn.onlinewebfonts.com/svg/img_169114.png' },
  { id: 2, area_name: 'Amérique du Nord', shorthand: 'NA', icon: 'https://cdn.onlinewebfonts.com/svg/img_169105.png' },
  { id: 3, area_name: 'Amérique du Sud', shorthand: 'SA', icon: 'https://cdn.onlinewebfonts.com/svg/img_169112.png' },
  { id: 4, area_name: 'Afrique', shorthand: 'AF', icon: 'https://cdn.onlinewebfonts.com/svg/img_169108.png' },
  { id: 5, area_name: 'Océanie', shorthand: 'OC', icon: 'https://cdn.onlinewebfonts.com/svg/img_169107.png' }
]);
