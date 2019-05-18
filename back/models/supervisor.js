const BaseModel = require('./base-model.js');

module.exports = new BaseModel('supervisor', t => {
  t.increments('id').primary();
  t.string('name', 50);
  t.string('title', 30);
  t.string('email', 50);
  t.string('category', 50);
},
[
  {
    id: 0, name: 'Maria-Paola Santisi d’Avila', title: 'Correspondant RI - GE',
    email: 'maria-paola.santisi-davila@polytech.unice.fr',
    category: 'Echange-SI'
  },
  {
    id: 1, name: 'Sébastien Bilavarn', title: 'Correspondant RI - ELEC',
    email: 'sébastien.bilavarn@polytech.unice.fr',
    category: 'Echange-ELEC'
  },
  {
    id: 2, name: 'Any Cupo', title: 'Correspondant RI - GB',
    email: 'any.cupo@polytech.unice.fr',
    category: 'Echange-GB'
  },
  {
    id: 3, name: 'Eric Macia', title: 'Correspondant RI - GB',
    email: 'eric.macia@polytech.unice.fr',
    category: 'Echange-GB'
  },
  {
    id: 4, name: 'Pierre Brigode', title: 'Correspondant RI - GE',
    email: 'pierre.brigode@polytech.unice.fr',
    category: 'Echange-GE'
  },
  {
    id: 5, name: 'Abderrahmane Habbal', title: 'Correspondant RI - MAM',
    email: 'abderrahmane.habbal@polytech.unice.fr',
    category: 'Echange-MAM'
  },
  {
    id: 6, name: 'Anne-Marie Pinna', title: 'Correspondant RI - SI',
    email: 'anne-marie.pinna@polytech.unice.fr',
    category: 'Echange-SI'
  },
  {
    id: 7, name: 'Julie Maiffret', title: 'Responsable BRI',
    email: 'bri@polytech.unice.fr',
    category: 'autres'
  },
  {
    id: 8, name: 'Joanna Winchcombe', title: 'Responsable BRI',
    email: 'bri@polytech.unice.fr',
    category: 'autres'
  },
  {
    id: 9, name: 'Jason Haenlin', title: 'Administrateur',
    email: 'contact@otakedev.com',
    category: 'Technique'
  }
]);
