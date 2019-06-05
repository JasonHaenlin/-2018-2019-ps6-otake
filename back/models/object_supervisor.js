const BaseModel = require('./base-model');

module.exports = new BaseModel('object_supervisor', t => {
  t.integer('supervisor_id').references('id').inTable('supervisor');
  t.integer('object_id').references('id').inTable('object');
  t.primary(['supervisor_id', 'object_id']);
},
[
  { supervisor_id: 0, object_id: 1 },
  { supervisor_id: 0, object_id: 2 },
  { supervisor_id: 0, object_id: 3 },
  { supervisor_id: 1, object_id: 1 },
  { supervisor_id: 1, object_id: 2 },
  { supervisor_id: 1, object_id: 3 },
  { supervisor_id: 2, object_id: 1 },
  { supervisor_id: 2, object_id: 2 },
  { supervisor_id: 2, object_id: 3 },
  { supervisor_id: 3, object_id: 1 },
  { supervisor_id: 3, object_id: 2 },
  { supervisor_id: 3, object_id: 3 },
  { supervisor_id: 4, object_id: 1 },
  { supervisor_id: 4, object_id: 2 },
  { supervisor_id: 4, object_id: 3 },
  { supervisor_id: 5, object_id: 1 },
  { supervisor_id: 5, object_id: 2 },
  { supervisor_id: 5, object_id: 3 },
  { supervisor_id: 6, object_id: 1 },
  { supervisor_id: 6, object_id: 2 },
  { supervisor_id: 6, object_id: 3 },
  { supervisor_id: 7, object_id: 4 },
  { supervisor_id: 8, object_id: 4 },
  { supervisor_id: 9, object_id: 4 }
]);
