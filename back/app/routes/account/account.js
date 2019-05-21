const resHandler = require('../../utils/response-handler');
const { token } = require('../../controller/account');

exports.createTokens = async (req, res) => {
  await token.submitNewTestimonialsForm(req.body);
  resHandler.yahResponse(res, { token: true });
};
