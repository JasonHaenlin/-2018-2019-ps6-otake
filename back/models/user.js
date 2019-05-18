const BaseModel = require('./base-model.js');

module.exports = new BaseModel('user', t => {
  t.integer('supervisor_id').references('id').inTable('supervisor');
  t.string('username', 50).unique();
  t.string('hash', 60).unique();
},
[
  {
    supervisor_id: 9, username: 'admin',
    hash: '$2b$10$m8TW9J0TBiJELxIGpXdLa.1jn97CNAFDRm6iS8JXgslM0Mh7qXyh2'
  }
]);
