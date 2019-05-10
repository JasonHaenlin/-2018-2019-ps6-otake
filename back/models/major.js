const BaseModel = require('./base-model');

module.exports = new BaseModel('major', t => {
  t.increments('id').primary();
  t.string('title', 50).unique();
  t.string('shorthand', 10).unique();
  t.string('icon', 100);
  t.string('header_img', 1024);
},
[
  { id: 0, title: 'Tous', shorthand: 'ALL', icon: 'fas fa-infinity', header_img: '' },
  {
    id: 1, title: 'Informatique', shorthand: 'SI', icon: 'fas fa-laptop',
    header_img: 'https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg'
  },
  {
    id: 2, title: 'Génie de l\'eau', shorthand: 'GE', icon: 'fas fa-tint',
    header_img: 'https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg'
  },
  {
    id: 3, title: 'Bâtiments', shorthand: 'BAT', icon: 'fas fa-pencil-ruler',
    header_img: 'https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg'
  },
  {
    id: 4, title: 'Electronique', shorthand: 'ELEC', icon: 'fas fa-bolt',
    header_img: 'http://unice.fr/polytechnice/fr/formation/electronique/leadImage_large'
  },
  {
    id: 5, title: 'Génie biologique', shorthand: 'GB', icon: 'fas fa-leaf',
    header_img: 'https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg'
  },
  {
    id: 6, title: 'Math.App. & Modélisation', shorthand: 'MAM', icon: 'fas fa-calculator',
    header_img: 'https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg'
  },
  {
    id: 7, title: 'Elec. & info.industrielle', shorthand: 'EII', icon: 'fas fa-microchip',
    header_img: 'https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg'
  }
]);
