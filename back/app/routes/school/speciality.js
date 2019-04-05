const resHandler = require('../../utils/response-handler');
const { speciality } = require('../../controller/school');

// using the database
exports.getSpecialities = async (req, res) => {
  const specialities = await speciality.getSpecialities();
  resHandler.yahResponse(res, specialities);
};
