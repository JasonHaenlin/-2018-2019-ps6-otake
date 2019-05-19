const resHandler = require('../../utils/response-handler');

exports.test = async (req, res) => {
  // handle secur resources
  resHandler.yahResponse(res, 'You are connected');
};
