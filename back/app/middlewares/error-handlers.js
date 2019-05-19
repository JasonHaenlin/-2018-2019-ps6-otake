/* eslint-disable promise/no-callback-in-promise */
/* eslint-disable no-unused-vars */

/* this js file helps us in handling errors */
/* we will be centralizing all the errors at one place */

const logTheError = require('../config').logger.logTheError;

module.exports = {
  logErrors(err, req, res, next) {
    /* log the error using winston for all production errors */
    logTheError(err.stack || err);
    next(err);
  },
  handleClientErrors: async (err, req, res, next) => {
    let message = 'something went wrong';
    if (process.env.NODE_ENV === 'development') {
      message = err.stack || err;
    }
    switch (err.name) {
      case 'ValidationError': res.status(400).json({ status: false, message: message }); break;
      case 'UnauthenticatedUserError': res.status(401).json({ status: false, message: message }); break;
      case 'AccessDeniedError': res.status(403).json({ status: false, message: message }); break;
      case 'NotFoundError': res.status(404).json({ status: false, message: message }); break;
      // jump to dev error
      default: next(err);
    }
  },
  handleDevErrors: async (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
      return res.status(500).json({ status: false, stack: err.stack || err });
    }
    res.status(500).json({ status: false, message: 'something went wrong' });
  },
  /* this is for handling 404 err */
  handle404Error: async (req, res) => {
    res.status(404).json({ status: false, code: 404, message: 'please check URL' });
  },
  /* centralizing all the errors */
  handleExceptions: fn =>
    (req, res, next) => {
      fn(req, res, next).catch((err) => next(err));
    }
};
