
exports.up = (knex) => {
  return knex.schema.createTable('study_departement', t => {
    t.number('university_id').references('id').inTable('exchange_university');
    t.number('study_id').references('id').inTable('major');
    t.primary(['university_id', 'study_id']);
  }).catch((e) => {
    console.log('There was an error with the study_departement table');
    console.log(e);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('study_departement')
    .catch((e) => {
      console.log('there was an error deleting study_departement table');
      console.log(e);
    });
};
