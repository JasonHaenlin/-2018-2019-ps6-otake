const BaseModel = require('./base-model.js');

module.exports = new BaseModel('supervisor', t => {
  t.increments('id').primary();
  t.string('name', 50);
  t.string('title', 30);
  t.string('email', 50);
  t.string('category', 50);
  t.integer('room_id').references('id').inTable('room');
  t.boolean('availability').defaultTo(false);
},
[
  {
    id: 0, name: 'Maria-Paola Santisi d’Avila', title: 'Correspondant RI - GE',
    email: 'maria-paola.santisi-davila@polytech.unice.fr',
    category: 'Echange-SI', room_id: 0, availability: true
  },
  {
    id: 1, name: 'Sébastien Bilavarn', title: 'Correspondant RI - ELEC',
    email: 'sébastien.bilavarn@polytech.unice.fr',
    category: 'Echange-ELEC', room_id: 1, availability: true
  },
  {
    id: 2, name: 'Any Cupo', title: 'Correspondant RI - GB',
    email: 'any.cupo@polytech.unice.fr',
    category: 'Echange-GB', room_id: 2, availability: false
  },
  {
    id: 3, name: 'Eric Macia', title: 'Correspondant RI - GB',
    email: 'eric.macia@polytech.unice.fr',
    category: 'Echange-GB', room_id: 3, availability: false
  },
  {
    id: 4, name: 'Pierre Brigode', title: 'Correspondant RI - GE',
    email: 'pierre.brigode@polytech.unice.fr',
    category: 'Echange-GE', room_id: 4, availability: true
  },
  {
    id: 5, name: 'Abderrahmane Habbal', title: 'Correspondant RI - MAM',
    email: 'abderrahmane.habbal@polytech.unice.fr',
    category: 'Echange-MAM', room_id: 5, availability: false
  },
  {
    id: 6, name: 'Anne-Marie Pinna', title: 'Correspondant RI - SI',
    email: 'anne-marie.pinna@polytech.unice.fr',
    category: 'Echange-SI', room_id: 6, availability: true
  },
  {
    id: 7, name: 'Julie Maiffret', title: 'Responsable BRI',
    email: 'bri@polytech.unice.fr',
    category: 'autres', room_id: 7, availability: true
  },
  {
    id: 8, name: 'Joanna Winchcombe', title: 'Responsable BRI',
    email: 'bri@polytech.unice.fr',
    category: 'autres', room_id: 8, availability: true
  },
  {
    id: 9, name: 'Jason Haenlin', title: 'Administrateur',
    email: 'contact@otakedev.com',
    category: 'Technique', room_id: 1, availability: true
  }
]);
