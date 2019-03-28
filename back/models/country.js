const BaseModel = require('./base-model.js');

module.exports = new BaseModel('country', t => {
  t.increments('id').primary();
  t.string('name', 50).unique();
  t.integer('area_id').references('id').inTable('geographical_area');
},
[
  { id: 0, name: 'Chine', area_id: 1 },
  { id: 1, name: 'Brésil', area_id: 3 },
  { id: 2, name: 'Canada', area_id: 2 },
  { id: 3, name: 'Taiwan ', area_id: 1 },
  { id: 4, name: 'Etats-Unis', area_id: 2 },
  { id: 5, name: 'Corée du Sud', area_id: 1 },
  { id: 6, name: 'Thailande', area_id: 1 },
  { id: 7, name: 'Vietnam', area_id: 1 },
  { id: 8, name: 'Allemagne', area_id: 0 },
  { id: 9, name: 'Belgique', area_id: 0 },
  { id: 10, name: 'Danemark', area_id: 0 },
  { id: 11, name: 'Espagne', area_id: 0 },
  { id: 12, name: 'Hongrie', area_id: 0 },
  { id: 13, name: 'Irlande', area_id: 0 },
  { id: 14, name: 'Italie', area_id: 0 },
  { id: 15, name: 'Norvège', area_id: 0 },
  { id: 16, name: 'Pologne', area_id: 0 },
  { id: 17, name: 'Portugal', area_id: 0 },
  { id: 18, name: 'Roumanie', area_id: 0 },
  { id: 19, name: 'Royaume-Uni', area_id: 0 },
  { id: 20, name: 'Suede', area_id: 0 },
  { id: 21, name: 'Argentine', area_id: 3 },
  { id: 22, name: 'Cameroun', area_id: 4 },
  { id: 23, name: 'Maroc', area_id: 4 },
  { id: 24, name: 'Suisse', area_id: 0 },
  { id: 25, name: 'Togo', area_id: 4 }
]);
