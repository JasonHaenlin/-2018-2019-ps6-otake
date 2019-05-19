const crypt = require('../../../utils/crypt');

module.exports = {

  ensureAuthenticated(req) {
    return req.isAuthenticated();
  },

  checkPassword(storedUser, password) {
    if (storedUser === null || !password) {
      throw new Error('Invalid username or password');
    }
    return crypt.decipher(storedUser.hash, password);
  }
};
