const { Queue } = require('../../middlewares/orm');

module.exports = {
  getQueue() {
    return Queue.query()
      .alias('q')
      .select('supervisor.name',
        'supervisor.availability',
        'student.first_name',
        'student.last_name',
        'supervisor:room.label as room')
      .joinRelation('[supervisor.room, student]');
  }

};
