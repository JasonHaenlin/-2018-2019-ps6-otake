const express = require('express');
const handleExceptions = require('../../middlewares/error-handlers').handleExceptions;

const geographicalArea = require('./geographical-area');

const universities = express.Router();

/* -- geographicalArea -- */
universities.get('/areas', handleExceptions(geographicalArea.getAreas));

module.exports = universities;
