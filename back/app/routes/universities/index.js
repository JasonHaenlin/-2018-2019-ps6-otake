const resHandler = require('@utils/responseHandler');
const geographicalArea = require('@controller/universities').geographicalArea;

// using the database
exports.getAreas = async (req, res) => {
  const area = await geographicalArea.getAreas();
  resHandler.yahResponse(res, area);
};
