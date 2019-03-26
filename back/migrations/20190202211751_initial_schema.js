const {
  author,
  ticket,
  major,
  geographicalArea,
  country,
  city,
  exchangeUniversity
} = require('../models/schemas');
/**
 * All the table are created here
 * be sure to create them in the right order
 * when constraints are present
 */

exports.up = (knex) => {
  return major.up(knex)
    .then(() => geographicalArea.up(knex))
    .then(() => country.up(knex))
    .then(() => city.up(knex))
    .then(() => exchangeUniversity.up(knex))
    .then(() => author.up(knex))
    .then(() => ticket.up(knex))
    .catch((err) => console.log(err));
};

exports.down = (knex) => {
  return major.down(knex)
    .then(() => exchangeUniversity.down(knex))
    .then(() => city.down(knex))
    .then(() => country.down(knex))
    .then(() => geographicalArea.down(knex))
    .then(() => ticket.down(knex))
    .then(() => author.down(knex))
    .catch((err) => console.log(err));
};
