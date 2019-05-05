// simple example using objection and knex
const Major = require('../../middlewares/orm/models').Major;

module.exports = {
  getMajors() {
    return Major.query();
  },
  getMajor(shorthand) {
    return Major.query().where({'major.shorthand': shorthand}).first();
  }
};
