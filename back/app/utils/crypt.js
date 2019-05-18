const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  async cipher(password) {
    try {
      return await bcrypt.hash(password, saltRounds);
    } catch (err) {
      throw new Error(`Error hashing the password : ${err.message}`);
    }
  },

  async decipher(stored, incoming) {
    try {
      return await bcrypt.compare(incoming, stored);
    } catch (err) {
      throw new Error(`The passwords doesn't match : ${err.message}`);
    }
  }
};
