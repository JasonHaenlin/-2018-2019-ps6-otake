const resHandler = require('../../utils/response-handler');
const { supervisor } = require('../../controller/school');

// using the database
exports.getSupervisors = async (req, res) => {
  const supervisors = await supervisor.getSupervisors();
  resHandler.yahResponse(res, supervisors);
};

exports.getSupervisorByCategory = async (req, res) => {
  const supervisors = await supervisor.getSupervisorByCategory(req.params.category);
  resHandler.yahResponse(res, supervisors);
};

