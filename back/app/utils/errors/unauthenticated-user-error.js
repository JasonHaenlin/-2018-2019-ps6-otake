const util = require('util');

class UnauthenticatedUserError {
  constructor(message, extra = {}) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.extra = extra;
  }
}

util.inherits(UnauthenticatedUserError, Error);

module.exports = UnauthenticatedUserError;
