// simple example using objection and knex
const { Testimonial } = require('../../middlewares/orm');

module.exports = {
  getTestimonials() {
    return Testimonial.query();
  }
};
