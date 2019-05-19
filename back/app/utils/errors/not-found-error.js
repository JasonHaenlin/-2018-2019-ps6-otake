const util = require('util');

class NotFoundError {
  constructor(message) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
  }
}

util.inherits(NotFoundError, Error);

module.exports = NotFoundError;
