module.exports = universities;
const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const geographicalArea = require('./geographical-area');
const university = require('./university');
const testimonial = require('./testimonial');

const universities = express.Router();

/* -- geographicalArea -- */
universities.get('/areas', handleExceptions(geographicalArea.getAreas));
/* -- universities cards -- */
universities.get('/', handleExceptions(university.getUniversities));
universities.get('/languages', handleExceptions(university.getLanguages));
universities.get('/majors', handleExceptions(university.getMajors));
/* -- university details -- */
universities.get('/:name', handleExceptions(university.getUniversityDetails));
/* -- testimonial -- */
universities.get('/testimonials', handleExceptions(testimonial.getTestimonials));

module.exports = universities;
