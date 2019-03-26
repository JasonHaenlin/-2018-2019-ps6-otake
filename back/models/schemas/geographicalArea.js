
exports.up = (knex) => {
  return knex.schema.createTable('geographical_area', t => {
    t.increments('id').primary();
    t.string('name', 30).unique();
    t.string('shorthand', 10);
    t.string('icon', 255);
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
