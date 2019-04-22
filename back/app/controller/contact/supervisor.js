const Supervisor = require('../../middlewares/orm').Supervisor;

module.exports = {
  getSupervisors() {
    return Supervisor.query();
  },
};
