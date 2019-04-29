const resHandler = require('../../utils/response-handler');
const { speciality } = require('../../controller/school');

// using the database
exports.getSpecialities = async (req, res) => {
  const specialities = await speciality.getSpecialities();
  resHandler.yahResponse(res, specialities);
};

exports.getCardSpecialities = async (req, res) => {
  const specialities = await speciality.getCardSpecialities(req.params.major);
  resHandler.yahResponse(res, specialities);
};

exports.getSpeciality = async (req, res) => {
  const spec = await speciality.getSpeciality(req.params.shorthand);
  resHandler.yahResponse(res, spec);
};
