const resHandler = require('../../utils/response-handler');
const { token } = require('../../controller/account');


exports.test = async (req, res) => {
  // handle secur resources
  resHandler.yahResponse(res, 'You are connected');
};

exports.createTokens = async (req, res) => {
  await token.submitNewTestimonialsForm(req.body.mails);
  resHandler.yahResponse(res, 'Forms Submited');
};
