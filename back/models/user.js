const BaseModel = require('./base-model.js');

module.exports = new BaseModel('user', t => {
  t.integer('id_supervisor').references('id').inTable('supervisor');
  t.string('username', 50).unique();
  t.string('hash', 60).unique();
},
[
  {
    id_supervisor: 9, username: 'admin',
    hash: '$2b$10$nrcX9c6U.L6yYG.7RqjSeYAUDojIera4y8Do4IRQoW7KXcx1e6yq'
  }
]);
