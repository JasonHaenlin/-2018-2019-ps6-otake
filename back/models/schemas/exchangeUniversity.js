exports.up = (knex) => {
  return knex.schema.createTable('exchange_university', t => {
    t.increments('id').primary();
    t.string('name').unique();
    t.integer('city_id').references('id').inTable('city');
    t.integer('cost_of_living');
    t.integer('nb_of_place');
    t.integer('admission_rate');
    t.string('small_picture');
    t.string('big_picture');
    t.string('presentation_text');
    t.string('admission_text');
    t.string('student_life_text');
    t.string('cost_of_living_text');
  }).catch((e) => {
    console.log('There was an error with the exchange_university table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('exchange_university')
    .catch((e) => {
      console.log('there was an error deleting exchange_university table');
      console.log(e);
    });
};
