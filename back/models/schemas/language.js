
exports.up = (knex) => {
  return knex.schema.createTable('language', t => {
    t.integer('university_id').references('id').inTable('university');
    t.string('language');
    t.enum('level', ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
    t.primary(['university_id', 'language']);
  }).catch((e) => {
    console.log('There was an error with the language table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('language')
    .catch((e) => {
      console.log('there was an error deleting language table');
      console.log(e);
    });
};
