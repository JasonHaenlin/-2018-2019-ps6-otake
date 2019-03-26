exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('country').del()
    .then(() => {
      // Inserts seed entries
      return knex('country').insert([
        { id: 0, name: 'HongKong', area_id: 1 },
        { id: 1, name: 'Pasadena', area_id: 2 }
      ]);
    });
};
