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
    supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501902
  },
  {
    supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501802
  },
  {
    supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501702
  },
  {
    supervisor_id: 2,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565501102
  },
  {
    supervisor_id: 0,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565401902
  },
  {
    supervisor_id: 3,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565301902
  },
  {
    supervisor_id: 3,
    student_id: 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3',
    created_at: 1559565201902
  }
]);
