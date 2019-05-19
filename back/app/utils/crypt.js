const bcrypt = require('bcrypt');
const { ValidationError } = require('../utils/errors');
const saltRounds = 10;

module.exports = {
  async cipher(password) {
    let hash = '';
    try {
      hash = await bcrypt.hash(password, saltRounds);
    } catch (err) {
      throw new Error(`Error hashing the password : ${err.message}`);
    }
    return hash;
  },

  async decipher(stored, incoming) {
    const match = await bcrypt.compare(incoming, stored);
    if (!match) {
      throw new ValidationError('Failed to login');
    }
    return true;
  }
};
