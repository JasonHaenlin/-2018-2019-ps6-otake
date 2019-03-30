const resHandler = require('../../utils/response-handler');
const { university } = require('../../controller/universities');

// using the database
exports.getUniversities = async (req, res) => {
  const universities = await university.getUniversitiesShortInfo();
  resHandler.yahResponse(res, universities);
};
