const resHandler = require('@utils/responseHandler');
const major = require('@controller/school').major;

// using the database
exports.getMajors = async (req, res) => {
  const majors = await major.getMajors();
  resHandler.yahResponse(res, majors);
};
