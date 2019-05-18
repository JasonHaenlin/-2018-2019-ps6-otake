const { User } = require('../../middlewares/orm/models');

module.exports = {
  getUser(username) {
    return User.query()
      .where({ username: username })
      .first();
  }
};
