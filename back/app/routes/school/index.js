const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const major = require('./major');
const speciality = require('./speciality');
const course = require('./course');
const info = require('./info');

const school = express.Router();

/* -- major -- */
school.get('/majors', handleExceptions(major.getMajors));

/* -- speciality -- */
school.get('/specialities', handleExceptions(speciality.getSpecialities));
school.get('/specialities/:major', handleExceptions(speciality.getSpecialitiesOf));

/* -- courses -- */
school.get('/courses', handleExceptions(course.getCourses));

/* -- school info -- */
school.get('/deadlines/:intervalDate', handleExceptions(info.getDeadlineByYears));

module.exports = school;
