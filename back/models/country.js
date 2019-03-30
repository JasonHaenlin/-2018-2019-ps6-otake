const BaseModel = require('./base-model.js');

module.exports = new BaseModel('country', t => {
  t.increments('id').primary();
  t.string('country_name', 50).unique();
  t.integer('area_id').references('id').inTable('geographical_area');
},
[
  { id: 0, country_name: 'Chine', area_id: 1 },
  { id: 1, country_name: 'Brésil', area_id: 3 },
  { id: 2, country_name: 'Canada', area_id: 2 },
  { id: 3, country_name: 'Taiwan ', area_id: 1 },
  { id: 4, country_name: 'Etats-Unis', area_id: 2 },
  { id: 5, country_name: 'Corée du Sud', area_id: 1 },
  { id: 6, country_name: 'Thailande', area_id: 1 },
  { id: 7, country_name: 'Vietnam', area_id: 1 },
  { id: 8, country_name: 'Allemagne', area_id: 0 },
  { id: 9, country_name: 'Belgique', area_id: 0 },
  { id: 10, country_name: 'Danemark', area_id: 0 },
  { id: 11, country_name: 'Espagne', area_id: 0 },
  { id: 12, country_name: 'Hongrie', area_id: 0 },
  { id: 13, country_name: 'Irlande', area_id: 0 },
  { id: 14, country_name: 'Italie', area_id: 0 },
  { id: 15, country_name: 'Norvège', area_id: 0 },
  { id: 16, country_name: 'Pologne', area_id: 0 },
  { id: 17, country_name: 'Portugal', area_id: 0 },
  { id: 18, country_name: 'Roumanie', area_id: 0 },
  { id: 19, country_name: 'Royaume-Uni', area_id: 0 },
  { id: 20, country_name: 'Suede', area_id: 0 },
  { id: 21, country_name: 'Argentine', area_id: 3 },
  { id: 22, country_name: 'Cameroun', area_id: 4 },
  { id: 23, country_name: 'Maroc', area_id: 4 },
  { id: 24, country_name: 'Suisse', area_id: 0 },
  { id: 25, country_name: 'Togo', area_id: 4 }
]);
