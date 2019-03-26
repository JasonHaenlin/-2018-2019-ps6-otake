
exports.up = (knex) => {
  return knex.schema.createTable('geographical_area', t => {
    t.increments('id').primary();
    t.string('name').unique();
    t.sting('shorthand');
    t.string('icon');
  }).catch((e) => {
    console.log('There was an error with the geographical_area table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('geographical_area')
    .catch((e) => {
      console.log('there was an error deleting geographical_area table');
      console.log(e);
    });
};
