
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('major').del()
    .then(() => {
      // Inserts seed entries
      return knex('major').insert([
        { id: 0, title: 'Informatique', shorthand: 'SI' },
        { id: 1, title: 'Génie de l\'eau', shorthand: 'GE' },
        { id: 2, title: 'Bâtiments', shorthand: 'BAT' },
        { id: 3, title: 'Electronique', shorthand: 'ELEC' },
        { id: 4, title: 'Génie biologique', shorthand: 'GB' },
        { id: 5, title: 'Math.App. & Modélisation', shorthand: 'MAM' },
        { id: 6, title: 'Elec. & info.industrielle', shorthand: 'EII' }
      ]);
    });
};
