const BaseModel = require('./base-model');

module.exports = new BaseModel('major', t => {
  t.increments('id').primary();
  t.string('title', 50).unique();
  t.string('shorthand', 10).unique();
  t.string('icon', 100);
},
[
  { id: 0, title: 'Tous', shorthand: 'ALL' },
  { id: 1, title: 'Informatique', shorthand: 'SI' },
  { id: 2, title: 'Génie de l\'eau', shorthand: 'GE' },
  { id: 3, title: 'Bâtiments', shorthand: 'BAT' },
  { id: 4, title: 'Electronique', shorthand: 'ELEC' },
  { id: 5, title: 'Génie biologique', shorthand: 'GB' },
  { id: 6, title: 'Math.App. & Modélisation', shorthand: 'MAM' },
  { id: 7, title: 'Elec. & info.industrielle', shorthand: 'EII' }
]);
