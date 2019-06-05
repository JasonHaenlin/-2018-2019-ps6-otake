const BaseModel = require('./base-model');

module.exports = new BaseModel('object', t => {
  t.increments('id').primary();
  t.string('title', 256).unique();
},
[
  { id: 0, title: 'Cours à choisir' },
  { id: 1, title: 'Aide à la mobilité' },
  { id: 2, title: 'Admission' },
  { id: 3, title: 'Signature' }
]);
