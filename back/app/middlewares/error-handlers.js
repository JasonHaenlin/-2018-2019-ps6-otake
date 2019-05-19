/* eslint-disable promise/no-callback-in-promise */
/* eslint-disable no-unused-vars */

/* this js file helps us in handling errors */
/* we will be centralizing all the errors at one place */

const { LogTheTransaction } = require('../config/logger');

module.exports = {
  logErrors(err, req, res, next) {
    /* log the error using winston for all production errors */
    LogTheTransaction(req.session.passport ? req.session.passport : 'none',
      `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    next(err);
  },

  handleClientErrors: async (err, req, res, next) => {
    let message = 'something went wrong';
    if (process.env.NODE_ENV === 'development') {
      message = err.stack || err;
    }

    if (err.name !== 'Error') {
      res.status(err.status).json({ message: message });
    } else {
      next(err);
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
