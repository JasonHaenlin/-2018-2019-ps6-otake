const BaseModel = require('./base-model.js');

module.exports = new BaseModel('queue', t => {
  t.increments('id').primary();
  t.integer('supervisor_id').references('id').inTable('supervisor');
  t.uuid('student_id').references('id').inTable('student');
  t.timestamps();
},
[
  { id: 1, supervisor_id: 0, student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3' }
]);
