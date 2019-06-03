const { Queue } = require('../../middlewares/orm');
const { raw } = require('objection');

module.exports = {
  getQueue(room, studentUuid) {
    return Queue.query()
      .alias('q')
      .select(
        'q.created_at',
        'supervisor.name as supervisor',
        'supervisor.availability',
        'student.first_name',
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
      });
  },

  insertTicketsInQueue(tickets) {
    if (process.env.NODE_ENV === 'development') {
      return tickets.reduce(async (previousPromise, nextValue) => {
        await previousPromise;
        return Queue.query().insert(nextValue);
      }, Promise.resolve());
    }
    // postgresql can handle array insert
    return Token.query().insert(tickets);
  }
};
