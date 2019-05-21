const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const user = require('./account');

const account = express.Router();

/* -- admin -- */
account.post('/form/testimonial', handleExceptions(user.createTokens));

module.exports = account;
