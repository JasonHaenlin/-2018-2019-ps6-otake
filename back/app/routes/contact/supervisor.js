const resHandler = require('../../utils/response-handler');
const { supervisor } = require('../../controller/contact');

// using the database
exports.getSupervisors = async (req, res) => {
  const supervisors = await supervisor.getSupervisors();
  resHandler.yahResponse(res, supervisors);
};
