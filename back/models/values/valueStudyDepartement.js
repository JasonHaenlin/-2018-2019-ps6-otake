
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('study_departement').del()
    .then(() => {
      // Inserts seed entries
      return knex('study_departement').insert([
        { university_id: 1, study_id: 1 }
      ]);
    });
};
