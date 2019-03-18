// simple example using objection and knex
const Major = require('@orm').Major;

module.exports = {
  getMajors() {
    return Major.query();
  }
};
