
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('geographical_area').del()
    .then(() => {
      // Inserts seed entries
      return knex('geographical_area').insert([
        { id: 0, name: 'Europe' },
        { id: 1, name: 'Asie' },
        { id: 2, name: 'Amérique du Nord' },
        { id: 3, name: 'Amérique du Sud' },
        { id: 4, name: 'Afrique' },
        { id: 5, name: 'Australie' }
      ]);
    });
};
