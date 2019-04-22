const BaseModel = require('./base-model.js');

module.exports = new BaseModel('supervisor', t => {
  t.increments('id').primary();
  t.string('name', 50);
  t.string('title', 30);
  t.string('email', 50);
},
[
  { id: 0, name: 'Contact 1', title: 'Responsable', email: 'contact-1@mail.com' },
  { id: 1, name: 'Contact 2', title: 'Responsable', email: 'contact-2@mail.com' },
  { id: 2, name: 'Contact 3', title: 'Responsable', email: 'contact-3@mail.com' },
  { id: 3, name: 'Contact 4', title: 'Responsable', email: 'contact-4@mail.com' },
  { id: 4, name: 'Contact 5', title: 'Administrateur', email: 'contact-5@mail.com' },
  { id: 5, name: 'Contact 6', title: 'Administrateur', email: 'contact-6@mail.com' },
  { id: 6, name: 'Contact 7', title: 'Administrateur', email: 'contact-7@mail.com' }
]);
