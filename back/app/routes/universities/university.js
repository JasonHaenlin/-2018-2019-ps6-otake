const resHandler = require('../../utils/response-handler');
const { university } = require('../../controller/universities');

// using the database
exports.getUniversities = async (req, res) => {
  const universities = await university.getUniversitiesShortInfo(req.query.area, req.query.language, req.query.major);
  resHandler.yahResponse(res, universities);
};
