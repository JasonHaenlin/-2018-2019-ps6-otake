const express = require('express');
const route = require('./routes');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { handle404Error, handleDevErrors, handleClientErrors, logErrors } = require('./middlewares/error-handlers');
const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add all the routes
app.use('/status', route.main);
// school url
app.use('/school', route.school);
// universities url
app.use('/universities', route.universities);
// admin url
app.use('/admin', route.admin);

// catch 404 and forward to error handler
// triggered when a non-existent route attempts to be accessed
app.use(handle404Error);

// log the errors
app.use(logErrors);

// client error handler
app.use(handleClientErrors);

// dev error handler
app.use(handleDevErrors);

module.exports = app;
