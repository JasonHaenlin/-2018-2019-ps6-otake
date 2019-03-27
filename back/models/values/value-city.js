exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('city').del()
    .then(() => {
      // Inserts seed entries
      return knex('city').insert([
        {id: 0, name: 'HongKong', country_id: 0},
        {id: 1, name: 'Pasadena', country_id: 1}
      ]);
    });
};
