const resHandler = require('../../utils/response-handler');

exports.test = async (req, res) => {
  resHandler.yahResponse(res, 'You are connected');
};
