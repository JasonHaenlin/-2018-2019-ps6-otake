const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const user = require('./account');

const account = express.Router();

/* -- user -- */
account.get('/test', handleExceptions(user.test));

account.post('/token', handleExceptions(user.checkTokenValidy));

account.post('/form/testimonial', handleExceptions(user.createTokens));
account.post('/form/submit/testimonial', handleExceptions(user.postForm));

module.exports = account;
