const tables = require('../models');

/**
 * All the table are created here
 * be sure to create them in the right order
 * when constraints are present
 */

exports.up = (knex, Promise) => {
  return Promise.all(tables.map(t => t.up(knex)));
};

exports.down = (knex, Promise) => {
  return Promise.all(tables.reverse().map(t => t.down(knex)));
};
