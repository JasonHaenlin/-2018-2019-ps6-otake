const resHandler = require('../../utils/response-handler');
const { testimonial } = require('../../controller/universities');
const { AccessDeniedError } = require('../../utils/errors');
const { token } = require('../../controller/account');

// using the database
exports.getTestimonials = async (req, res) => {
  const testimonials = await testimonial.getTestimonials();
  resHandler.yahResponse(res, testimonials);
};

exports.getTestimonialByUniversity = async (req, res) => {
  const testimonials = await testimonial.getTestimonialByUniversity();
  resHandler.yahResponse(res, testimonials);
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
