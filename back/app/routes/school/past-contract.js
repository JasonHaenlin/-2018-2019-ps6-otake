const resHandler = require('../../utils/response-handler');
const { pastContract } = require('../../controller/school');

// using the database
exports.getPastContracts = async (req, res) => {
  const pastContracts = await pastContract.getPastContracts();
  resHandler.yahResponse(res, pastContracts);
};
