const resHandler = require('../../utils/response-handler');
const { university } = require('../../controller/universities');

// using the database
exports.getUniversities = async (req, res) => {
  const universities = await university.getUniversitiesShortInfo(req.query.area, req.query.language, req.query.major);
  resHandler.yahResponse(res, universities);
};

exports.getAreas = async (req, res) => {
  const areas = await university.getAreas();
  resHandler.yahResponse(res, areas);
};

exports.getLanguages = async (req, res) => {
  const languages = await university.getLanguages();
  resHandler.yahResponse(res, languages);
};

exports.getMajors = async (req, res) => {
  const majors = await university.getMajors();
  resHandler.yahResponse(res, majors);
};

exports.getUniversityDetails = async (req, res) => {
  const univDetails = await university.getUniversityDetails(req.params.name);
  resHandler.yahResponse(res, univDetails);
};
