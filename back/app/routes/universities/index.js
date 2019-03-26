const express = require('express');
const handleExceptions = require('../../middlewares/errorHandlers').handleExceptions;

const geographicalArea = require('./geographicalArea');

const universities = express.Router();

/* -- geographicalArea -- */
universities.get('/areas', handleExceptions(geographicalArea.getAreas));

module.exports = universities;
