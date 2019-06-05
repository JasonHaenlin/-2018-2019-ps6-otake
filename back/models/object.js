const BaseModel = require('./base-model');

module.exports = new BaseModel('object', t => {
  t.increments('id').primary();
  t.string('title', 256).unique();
},
[
  { id: 1, title: 'Cours à choisir' },
  { id: 2, title: 'Aide à la mobilité' },
  { id: 3, title: 'Admission' },
  { id: 4, title: 'Signature' }
]);
