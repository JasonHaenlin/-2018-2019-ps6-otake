const BaseModel = require('./base-model');

module.exports = new BaseModel('major', t => {
  t.increments('id').primary();
  t.string('title', 50).unique();
  t.string('shorthand', 10).unique();
  t.string('icon', 100);
},
[
  { id: 0, title: 'Tous', shorthand: 'ALL', icon: 'fas fa-infinity' },
  { id: 1, title: 'Informatique', shorthand: 'SI', icon: 'fas fa-laptop' },
  { id: 2, title: 'Génie de l\'eau', shorthand: 'GE', icon: 'fas fa-tint' },
  { id: 3, title: 'Bâtiments', shorthand: 'BAT', icon: 'fas fa-pencil-ruler' },
  { id: 4, title: 'Electronique', shorthand: 'ELEC', icon: 'fas fa-bolt' },
  { id: 5, title: 'Génie biologique', shorthand: 'GB', icon: 'fas fa-leaf' },
  { id: 6, title: 'Math.App. & Modélisation', shorthand: 'MAM', icon: 'fas fa-calculator' },
  { id: 7, title: 'Elec. & info.industrielle', shorthand: 'EII', icon: 'fas fa-microchip' }
]);
