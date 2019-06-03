const BaseModel = require('./base-model.js');

module.exports = new BaseModel('queue', t => {
  t.increments('id').primary();
  t.integer('supervisor_id').references('id').inTable('supervisor');
  t.uuid('student_id').references('id').inTable('student');
  t.string('object', 64).defaultTo('');
  t.bigInteger('created_at').defaultTo((Date.now()));
},
[
  {
    id: 1, supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501902
  },
  {
    id: 2, supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501802
  },
  {
    id: 3, supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501702
  },
  {
    id: 4, supervisor_id: 2,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501102
  },
  {
    id: 5, supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565401902
  },
  {
    id: 6, supervisor_id: 3,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565301902
  },
  {
    id: 7, supervisor_id: 3,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565201902
  }
]);
