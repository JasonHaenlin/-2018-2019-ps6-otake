// simple example using objection and knex
const { FinancialAid } = require('../../middlewares/orm/models');

module.exports = {
  getFinancialAids() {
    return FinancialAid.query();
  }
};
