const {
  valueAuthor,
  valueCountry,
  valueGeographicalArea,
  valueMajor,
  valueTicket,
  valueCity,
  valueExchangeUniversity
} = require('../models/values');


exports.seed = (knex) => {
  // Deletes ALL existing entries
  return valueMajor.seed(knex)
    .then(() => valueAuthor.seed(knex))
    .then(() => valueTicket.seed(knex))
    .then(() => valueGeographicalArea.seed(knex))
    .then(() => valueCountry.seed(knex))
    .then(() => valueCity.seed(knex))
    .then(() => valueExchangeUniversity.seed(knex));
};
