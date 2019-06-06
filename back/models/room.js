const BaseModel = require('./base-model.js');

module.exports = new BaseModel('room', t => {
  t.increments('id').primary();
  t.string('label', 16);
},
[
  { id: 0, label: 'O+133' },
  { id: 1, label: 'O+134' },
  { id: 2, label: 'O+135' },
  { id: 3, label: 'O+136' },
  { id: 4, label: 'O+137' },
  { id: 5, label: 'O+138' },
  { id: 6, label: 'O+139' },
  { id: 7, label: 'O+140' },
  { id: 8, label: 'O+141' },
  { id: 9, label: 'O+142' },
  { id: 10, label: 'O+205' }
]);
