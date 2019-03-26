
exports.up = (knex) => {
  return knex.schema.createTable('speciality', t => {
    t.increments('id').primary();
    t.string('name');
    t.string('shorthand', 10);
    t.string('small_picture');
    t.string('big_picture');
    t.string('description');
    t.string('topics');
  }).catch((e) => {
    console.log('There was an error with the Speciality table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('speciality')
    .catch((e) => {
      console.log('there was an error deleting Speciality table');
      console.log(e);
    });
};
