const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const user = require('./account');

const account = express.Router();

/* -- user -- */
account.get('/test', handleExceptions(user.test));

module.exports = account;
