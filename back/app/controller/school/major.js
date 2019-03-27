// simple example using objection and knex
const Major = require('../../middlewares/orm').Major;

module.exports = {
  getMajors() {
    return Major.query();
  }
};
