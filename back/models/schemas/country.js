exports.up = (knex) => {
  return knex.schema.createTable('country', t => {
    t.increments('id').primary();
    t.string('name').unique();
    t.integer('area_id').references('id').inTable('geographical_area');
  }).catch((e) => {
    console.log('There was an error with the country table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('country')
    .catch((e) => {
      console.log('there was an error deleting country table');
      console.log(e);
    });
};
