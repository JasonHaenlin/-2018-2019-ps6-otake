const BaseModel = require('./base-model.js');

module.exports = new BaseModel('supervisor', t => {
    t.increments('id').primary();
    t.string('name', 50);
    t.string('title', 30);
    t.string.email('email',50);
  },
  [
  ]);
