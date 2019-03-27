
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('geographical_area').del()
    .then(() => {
      // Inserts seed entries
      return knex('geographical_area').insert([
        { id: 0, name: 'Europe', shorthand: 'NA' },
        { id: 1, name: 'Asie', shorthand: 'AS' },
        { id: 2, name: 'Amérique du Nord', shorthand: 'NA' },
        { id: 3, name: 'Amérique du Sud', shorthand: 'SA' },
        { id: 4, name: 'Afrique', shorthand: 'AF' },
        { id: 5, name: 'Océanie', shorthand: 'OC' }
      ]);
    });
};
