const BaseModel = require('./base-model');

module.exports = new BaseModel('geographical_area', t => {
  t.increments('id').primary();
  t.string('area_name', 30).unique();
  t.string('shorthand', 10);
  t.string('icon', 255);
},
[
  { id: 0, area_name: 'Europe', shorthand: 'EU', icon: 'https://otakedev.com/share/images/areas/EU.png' },
  { id: 1, area_name: 'Asie', shorthand: 'AS', icon: 'https://otakedev.com/share/images/areas/ASIA.png' },
  { id: 2, area_name: 'Amérique du Nord', shorthand: 'NA', icon: 'https://otakedev.com/share/images/areas/AN.png' },
  { id: 3, area_name: 'Amérique du Sud', shorthand: 'SA', icon: 'https://otakedev.com/share/images/areas/AS.png' },
  { id: 4, area_name: 'Afrique', shorthand: 'AF', icon: 'https://otakedev.com/share/images/areas/AF.png' }
  // { id: 5, area_name: 'Océanie', shorthand: 'OC', icon: 'https://cdn.onlinewebfonts.com/svg/img_169107.png' }
]);
