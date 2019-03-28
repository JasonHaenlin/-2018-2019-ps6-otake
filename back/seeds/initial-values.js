const {
  major,
  geographicalArea,
  country,
  city,
  exchangeUniversity,
  language,
  studyDepartement
} = require('../models');

/**
 * All the values are insert here
 * be sure to create them in the right order
 * when constraints are present
 */

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return major.seed(knex)
    .then(() => geographicalArea.seed(knex))
    .then(() => country.seed(knex))
    .then(() => city.seed(knex))
    .then(() => exchangeUniversity.seed(knex))
    .then(() => language.seed(knex))
    .then(() => studyDepartement.seed(knex));
};
