const express = require('express');
const handleExceptions = require('../../middlewares/error-handlers').handleExceptions;

const major = require('./major');

const school = express.Router();

/* -- major -- */
school.get('/majors', handleExceptions(major.getMajors));

module.exports = school;
