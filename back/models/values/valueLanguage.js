
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('language').del()
    .then(() => {
      // Inserts seed entries
      return knex('language').insert([
        // { university_id: 1, language: '', level: B1 }
      ]);
    });
};
