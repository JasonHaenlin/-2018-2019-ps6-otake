// simple example using objection and knex
const GeographicalArea = require('@orm').GeographicalArea;

module.exports = {
  getAreas() {
    return GeographicalArea.query();
  }
};
