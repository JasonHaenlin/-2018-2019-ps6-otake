const { User } = require('../../middlewares/orm');

module.exports = {
  getUser(username) {
    return User.query()
      .alias('u')
      .select('u.supervisor_id as id', 'u.username', 'u.hash')
      .where({ username: username })
      .first();
  },

  getById(id) {
    return User.query()
      .alias('u')
      .select('u.supervisor_id as id', 'u.username', 'u.hash')
      .where({ supervisor_id: id })
      .first();
  }


};
