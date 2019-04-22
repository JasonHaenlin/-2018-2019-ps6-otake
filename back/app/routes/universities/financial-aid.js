const resHandler = require('../../utils/response-handler');
const { financialAid } = require('../../controller/universities');

// using the database
exports.getFinancialAids = async (req, res) => {
  const financialAids = await financialAid.getFinancialAids();
  resHandler.yahResponse(res, financialAids);
};
