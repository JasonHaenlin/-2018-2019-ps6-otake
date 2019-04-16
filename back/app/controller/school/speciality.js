// simple example using objection and knex
const { Speciality } = require('../../middlewares/orm');

module.exports = {
  getSpecialities() {
    return Speciality.query();
  },
  getSpecialitiesOf(major) {
    return Speciality.query()
      .alias('s')
      .joinRelation('major')
      .where({ 'major.shorthand': major })
      .select('s.name', 's.shorthand', 's.small_picture', 's.topics');
  }
};
