
exports.up = (knex) => {
  return knex.schema.createTable('courses', t => {
    t.increments('id').primary();
    t.increments('major_spec_id').references('id').inTable('major_speciality');
  }).catch((e) => {
    console.log('There was an error with the Courses table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('courses')
    .catch((e) => {
      console.log('there was an error deleting Courses table');
      console.log(e);
    });
};
