const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const university = require('./university');
const testimonial = require('./testimonial');
const financialAid = require('./financial-aid');

const universities = express.Router();

/* -- universities cards -- */
universities.get('/page=:page', handleExceptions(university.getUniversities));

universities.get('/search=:terms', handleExceptions(university.getUniversitiesByterms));

/* -- info -- */
universities.get('/areas', handleExceptions(university.getAreas));
universities.get('/languages', handleExceptions(university.getLanguages));
universities.get('/majors', handleExceptions(university.getMajors));

/* -- university details -- */
universities.get('/details/:id', handleExceptions(university.getUniversityDetails));
/* -- testimonial -- */
universities.get('/testimonials', handleExceptions(testimonial.getTestimonials));
universities.get('/:name/testimonials', handleExceptions(testimonial.getTestimonialByUniversity));
universities.post('/testimonial/:token', handleExceptions(testimonial.postForm));
/* -- financialAid -- */
universities.get('/financialAids', handleExceptions(financialAid.getFinancialAids));
module.exports = universities;
