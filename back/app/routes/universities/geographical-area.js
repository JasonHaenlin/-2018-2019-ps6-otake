const resHandler = require('@utils/response-handler');
const geographicalArea = require('@controller/universities').geographicalArea;

// using the database
exports.getAreas = async (req, res) => {
  const area = await geographicalArea.getAreas();
  resHandler.yahResponse(res, area);
};
