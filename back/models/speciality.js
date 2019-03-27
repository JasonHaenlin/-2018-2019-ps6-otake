const BaseModel = require('./base-model');

module.exports = new BaseModel('speciality', t => {
  t.increments('id').primary();
  t.string('name');
  t.string('shorthand', 10);
  t.string('small_picture');
  t.string('big_picture');
  t.string('description');
  t.string('topics');
});
