const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const geographicalArea = require('./geographical-area');
const university = require('./university');
const testimonial = require('./testimonial');

const universities = express.Router();

/* -- geographicalArea -- */
universities.get('/', handleExceptions(university.getUniversities));
universities.get('/areas', handleExceptions(geographicalArea.getAreas));
universities.get('/testimonials', handleExceptions(testimonial.getTestimonials));

module.exports = universities;
