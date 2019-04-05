const BaseModel = require('./base-model.js');

module.exports = new BaseModel('language', t => {
  t.increments('id').primary();
  t.string('language', 30).unique();
  t.string('icon_url', 50);
},
[
  { id: 0, language: 'Anglais', icon_url: '' },
  { id: 1, language: 'Français', icon_url: '' },
  { id: 2, language: 'Chinois', icon_url: '' },
  { id: 3, language: 'Allemand', icon_url: '' },
  { id: 4, language: 'Coréen', icon_url: '' },
  { id: 5, language: 'vietnamien', icon_url: '' },
  { id: 6, language: 'Italien', icon_url: '' },
  { id: 7, language: 'Espagnol', icon_url: '' },
  { id: 8, language: 'Portuguais', icon_url: '' }
]);
