const {
  valueCountry,
  valueGeographicalArea,
  valueMajor,
  valueCity,
  valueExchangeUniversity
} = require('../models/values');


exports.seed = (knex) => {
  // Deletes ALL existing entries
  return valueMajor.seed(knex)
    .then(() => valueGeographicalArea.seed(knex))
    .then(() => valueCountry.seed(knex))
    .then(() => valueCity.seed(knex))
    .then(() => valueExchangeUniversity.seed(knex));
};
