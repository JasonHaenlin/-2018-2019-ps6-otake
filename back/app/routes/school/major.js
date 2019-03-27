const resHandler = require('../../utils/response-handler');
const { major } = require('../../controller/school');

// using the database
exports.getMajors = async (req, res) => {
  const majors = await major.getMajors();
  resHandler.yahResponse(res, majors);
};
