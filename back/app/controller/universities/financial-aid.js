// simple example using objection and knex
const { FinancialAid } = require('../../middlewares/orm');

module.exports = {
  getFinancialAids() {
    return FinancialAid.query();
  }
};
