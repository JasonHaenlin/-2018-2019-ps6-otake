const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const user = require('./user');

const admin = express.Router();

/* -- user -- */
admin.post('/login', handleExceptions(user.loginUser));

module.exports = admin;
