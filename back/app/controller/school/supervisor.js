const { Supervisor } = require('../../middlewares/orm');

module.exports = {
  getSupervisors() {
    return Supervisor.query();
  }
};
