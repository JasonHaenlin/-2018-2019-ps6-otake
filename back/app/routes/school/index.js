const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const major = require('./major');

const school = express.Router();

/* -- major -- */
school.get('/majors', handleExceptions(major.getMajors));

module.exports = school;
