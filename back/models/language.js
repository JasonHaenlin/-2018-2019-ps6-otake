const BaseModel = require('./base-model.js');

module.exports = new BaseModel('language', t => {
  t.increments('id').primary();
  t.string('language', 30).unique();
  t.string('icon_url', 50);
},
[
  { id: 0, language: 'Anglais', icon_url: 'https://otakedev.com/share/flags/USA.png' },
  { id: 1, language: 'Français', icon_url: 'https://otakedev.com/share/flags/France.png' },
  { id: 2, language: 'Chinois', icon_url: 'https://otakedev.com/share/flags/China.png' },
  { id: 3, language: 'Allemand', icon_url: 'https://otakedev.com/share/flags/Germany.png' },
  { id: 4, language: 'Coréen', icon_url: 'https://otakedev.com/share/flags/South-Korea.png' },
  { id: 5, language: 'vietnamien', icon_url: 'https://otakedev.com/share/flags/Vietnam.png' },
  { id: 6, language: 'Italien', icon_url: 'https://otakedev.com/share/flags/Italy.png' },
  { id: 7, language: 'Espagnol', icon_url: 'https://otakedev.com/share/flags/Spain.png' },
  { id: 8, language: 'Portuguais', icon_url: 'https://otakedev.com/share/flags/Portugal.png' }
]);
