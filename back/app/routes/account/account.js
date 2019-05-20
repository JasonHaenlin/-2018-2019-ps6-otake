const resHandler = require('../../utils/response-handler');
const { AccessDeniedError } = require('../../utils/errors');
const { token } = require('../../controller/account');
const { testimonial } = require('../../controller/universities');

exports.createTokens = async (req, res) => {
  await token.submitNewTestimonialsForm(req.body);
  resHandler.yahResponse(res, { token: true });
};

exports.checkTokenValidy = async (req, res) => {
  const status = await token.checkTokenValidy(req.body.token);
  resHandler.yahResponse(res, { token: status ? true : false });
};

exports.postForm = async (req, res) => {
  const t = await token.checkTokenValidy(req.body.token);
  if (!t) {
    throw new AccessDeniedError('Token not valid');
  }
  await token.blockToken(t);
  await testimonial.insertTestimonial(req.body.form);
  resHandler.yahResponse(res, { status: true });
};
