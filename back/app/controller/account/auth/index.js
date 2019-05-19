const crypt = require('../../../utils/crypt');

module.exports = {

  ensureAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      throw new Error('No privilege to access this resource');
    }
    next();
  },

  checkPassword(storedUser, password) {
    if (storedUser === null || !password) {
      throw new Error('Invalid username or password');
    }
    return crypt.decipher(storedUser.hash, password);
  }
};
