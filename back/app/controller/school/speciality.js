// simple example using objection and knex
const { Speciality } = require('../../middlewares/orm');

module.exports = {
  getSpecialities() {
    return Speciality.query();
  }
};
