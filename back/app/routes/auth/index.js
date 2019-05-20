const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const user = require('./user');

const auth = express.Router();

/* -- user -- */
auth.post('/login', handleExceptions(user.loginUser));
auth.get('/logout', handleExceptions(user.logoutUser));
auth.get('/check', handleExceptions(user.checkAuthentication));

module.exports = auth;
