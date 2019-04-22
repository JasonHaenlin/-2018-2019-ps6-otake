const BaseModel = require('./base-model.js');

module.exports = new BaseModel('supervisor', t => {
  t.increments('id').primary();
  t.string('name', 50);
  t.string('title', 30);
  t.string('email', 50);
},
[
  {
    id: 0, name: 'Maria-Paola Santisi d’Avila', title: 'Correspondant RI - GE',
    email: 'maria-paola.santisi-davila@polytech.unice.fr'
  },
  {
    id: 1, name: 'Sébastien Bilavarn', title: 'Correspondant RI - ELEC',
    email: 'sébastien.bilavarn@polytech.unice.fr'
  },
  {
    id: 2, name: 'Any Cupo', title: 'Correspondant RI - GB',
    email: 'any.cupo@polytech.unice.fr'
  },
  {
    id: 3, name: 'Eric Macia', title: 'Correspondant RI - GB',
    email: 'eric.macia@polytech.unice.fr'
  },
  {
    id: 4, name: 'Pierre Brigode', title: 'Correspondant RI - GE',
    email: 'pierre.brigode@polytech.unice.fr'
  },
  {
    id: 5, name: 'Abderrahmane Habbal', title: 'Correspondant RI - MAM',
    email: 'abderrahmane.habbal@polytech.unice.fr'
  },
  {
    id: 6, name: 'Anne-Marie Pinna', title: 'Correspondant RI - SI',
    email: 'anne-marie.pinna@polytech.unice.fr'
  },
  {
    id: 7, name: 'Julie Maiffret', title: 'Responsable BRI',
    email: 'bri@polytech.unice.fr'
  },
  {
    id: 8, name: 'Joanna Winchcombe', title: 'Responsable BRI',
    email: 'bri@polytech.unice.fr'
  },
  {
    id: 9, name: 'Jason Haenlin', title: 'Administrateur',
    email: 'contact@otakedev.com'
  }
]);
