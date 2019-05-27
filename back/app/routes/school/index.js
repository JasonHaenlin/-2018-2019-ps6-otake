const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const major = require('./major');
const speciality = require('./speciality');
const course = require('./course');
const info = require('./info');
const supervisor = require('./supervisor');
const contract = require('./past-contract');

const school = express.Router();

/* -- major -- */
school.get('/majors', handleExceptions(major.getMajors));
school.get('/majors/:shorthand', handleExceptions(major.getMajor));

/* -- speciality -- */
school.get('/specialities', handleExceptions(speciality.getSpecialities));
school.get('/speciality/:shorthand/', handleExceptions(speciality.getSpeciality));
school.get('/specialities/:major', handleExceptions(speciality.getCardSpecialities));

/* -- contract -- */
school.get('/contracts', handleExceptions(contract.getPastContracts));
school.get('/contracts/:speciality', handleExceptions(contract.getPastContractsWithGeographicalAreaAndSpeciality));

/* -- courses -- */
school.get('/courses', handleExceptions(course.getCourses));
school.get('/courses/:major', handleExceptions(course.getCoursesOf));
school.get('/courses/:major/:semester', handleExceptions(course.getCoursesOfMajorForThisSemester));


/* -- school info -- */
school.get('/deadlines/:intervalDate', handleExceptions(info.getDeadlineByYears));

/* -- supervisor -- */
school.get('/supervisors', handleExceptions(supervisor.getSupervisors));
school.get('/supervisors/:category', handleExceptions(supervisor.getSupervisorByCategory));
school.post('/email', handleExceptions(supervisor.sendEmail));

module.exports = school;
