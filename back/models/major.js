
exports.up = (knex) => {
  return knex.schema.createTable('major', t => {
    t.increments('id').primary();
    t.string('title').unique();
    t.string('shorthand').unique();
    t.string('icon');
  }).catch((e) => {
    console.log('There was an error with the major table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('major')
    .catch((e) => {
      console.log('there was an error deleting major table');
      console.log(e);
    });
};
