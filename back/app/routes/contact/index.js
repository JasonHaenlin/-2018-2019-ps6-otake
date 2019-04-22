const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const supervisor = require('./supervisor');

const contact = express.Router();

/* -- supervisor -- */
school.get('/supervisors', handleExceptions(supervisor.getSupervisors()));

module.exports = contact;
