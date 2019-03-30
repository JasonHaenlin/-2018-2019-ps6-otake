const tables = require('../models');

/**
 * All the values are insert here
 * be sure to create them in the right order
 * when constraints are present
 */

exports.seed = (knex, Promise) => {
  return Promise.all([
    Promise.all(tables.reverse().map(t => t.del(knex))),
    Promise.all(tables.reverse().map(t => t.seed(knex)))
  ]);
};
