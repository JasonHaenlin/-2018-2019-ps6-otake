const crypt = require('../../../utils/crypt');

module.exports = {
  checkPassword(storedUser, password) {
    if (storedUser === null || !password) {
      throw new Error('Invalid username or password');
    }
    return crypt.decipher(storedUser.hash, password);
  }
};
