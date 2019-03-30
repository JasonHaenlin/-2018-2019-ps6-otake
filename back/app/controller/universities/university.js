// simple example using objection and knex
const { ExchangeUniversity } = require('../../middlewares/orm');

module.exports = {
  getUniversitiesShortInfo() {
    return ExchangeUniversity.query();
  }
};
