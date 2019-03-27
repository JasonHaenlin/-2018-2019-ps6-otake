const BaseModel = require('./base-model');

module.exports = new BaseModel('major', t => {
  t.increments('id').primary();
  t.string('title', 50).unique();
  t.string('shorthand', 10).unique();
  t.string('icon', 100);
},
[
  { id: 0, title: 'Informatique', shorthand: 'SI' },
  { id: 1, title: 'Génie de l\'eau', shorthand: 'GE' },
  { id: 2, title: 'Bâtiments', shorthand: 'BAT' },
  { id: 3, title: 'Electronique', shorthand: 'ELEC' },
  { id: 4, title: 'Génie biologique', shorthand: 'GB' },
  { id: 5, title: 'Math.App. & Modélisation', shorthand: 'MAM' },
  { id: 6, title: 'Elec. & info.industrielle', shorthand: 'EII' }
]);
