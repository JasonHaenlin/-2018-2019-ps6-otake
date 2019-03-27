const express = require('express');
const route = require('./routes');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { handle404Error, handleDevErrors } = require('./middlewares/error-handlers');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add all the routes
app.use('/status', route.main);
// school url
app.use('/school', route.school);
// universities url
app.use('/universities', route.universities);

// catch 404 and forward to error handler
app.use(handle404Error);
// error handler
app.use(handleDevErrors);

module.exports = app;
