// simple example using objection and knex
const { GeographicalArea } = require('../../middlewares/orm');

module.exports = {
  getAreas() {
    return GeographicalArea.query();
  }
};
