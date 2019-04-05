const { Course } = require('../../middlewares/orm');

module.exports = {
  getCourses() {
    return Course.query();
  }
};
