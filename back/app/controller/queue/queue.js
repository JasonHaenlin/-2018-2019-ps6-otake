const { Queue } = require('../../middlewares/orm');
const { raw } = require('objection');

module.exports = {
  getQueue(room, studentUuid) {
    return Queue.query()
      .alias('q')
      .select(
        'q.created_at',
        'q.id',
        'q.student_id',
        'supervisor.name as supervisor',
        'supervisor.availability',
        'student.first_name',
        'student.last_name',
        'student:major.title as major',
        'supervisor:room.label as room',
        raw('rank() over (partition by q.supervisor_id order by q.created_at) rank'))
      .joinRelation('[supervisor.room, student.major]')
      .modify((queryBuilder) => {
        if (room) {
          queryBuilder.where('supervisor:room.id', room);
        }
        if (studentUuid) {
          queryBuilder.where('q.student_id', studentUuid);
        }
      });
  },

  insertTicketsInQueue(tickets) {
    tickets.forEach(element => {
      element.created_at = Date.now();
    });
    if (process.env.NODE_ENV === 'development') {
      return tickets.reduce(async (previousPromise, nextValue) => {
        await previousPromise;
        return Queue.query().insert(nextValue);
      }, Promise.resolve());
    }
    // postgresql can handle array insert
    return Queue.query().insert(tickets);
  },

  deleteTickets(id, token) {
    return Queue.query()
      .delete()
      .where({ id: id })
      .andWhere({ student_id: token });
  },

  async deleteLastTickets(room) {
    const lastTicket = await Queue.query()
      .select('queue.id')
      .joinRelation('supervisor.room')
      .whereExists(
        Queue.relatedQuery('supervisor')
          .joinRelation('room')
          .where('room.id', room)
      )
      .orderBy('queue.created_at')
      .first();

    return Queue.query()
      .delete()
      .where({ id: lastTicket.id });
  }
};
