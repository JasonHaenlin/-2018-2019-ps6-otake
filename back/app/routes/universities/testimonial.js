const resHandler = require('../../utils/response-handler');
const { testimonial } = require('../../controller/universities');

// using the database
exports.getTestimonials = async (req, res) => {
  const testimonials = await testimonial.getTestimonials();
  resHandler.yahResponse(res, testimonials);
};

exports.getTestimonialByUniversity = async (req, res) => {
  const testimonials = await testimonial.getTestimonialByUniversity();
  resHandler.yahResponse(res, testimonials);
}
