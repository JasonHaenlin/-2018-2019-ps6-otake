const { Queue } = require('../../middlewares/orm');
const { raw } = require('objection');

module.exports = {
  getQueue(room, studentUuid) {
    return Queue.query()
      .alias('q')
      .select(
        'q.created_at',
        'supervisor.name',
        'supervisor.availability',
        'student.first_name as supervisor',
        'student.last_name',
        'student:major.title as major',
        'supervisor:room.label as room',
        raw('rank() over (order by q.created_at) rank'))
      .joinRelation('[supervisor.room, student.major]')
      .modify((queryBuilder) => {
        if (studentUuid) {
          queryBuilder.where('student.id', studentUuid);
        }
        if (room) {
          queryBuilder.where('supervisor:room.label', room);
        }
      })
      .groupBy('supervisor:room.label');
  }
};
