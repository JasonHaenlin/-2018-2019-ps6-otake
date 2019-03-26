
exports.up = (knex) => {
  return knex.schema.createTable('major_speciality', t => {
    t.increments('id').primary();
    t.increments('major_id').references('id').inTable('major');
    t.increments('speciality_id').references('id').inTable('speciality');
  }).catch((e) => {
    console.log('There was an error with the Major speciality table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('major_speciality')
    .catch((e) => {
      console.log('there was an error deleting Major speciality table');
      console.log(e);
    });
};
