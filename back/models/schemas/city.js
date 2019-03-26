exports.up = (knex) => {
  return knex.schema.createTable('city', t => {
    t.increments('id').primary();
    t.string('name').unique();
    t.integer('country_id').references('id').inTable('country');
  }).catch((e) => {
    console.log('There was an error with the city table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('city')
    .catch((e) => {
      console.log('there was an error deleting city table');
      console.log(e);
    });
};
