const Model = require('./config');

class Queue extends Model {
  static get tableName() {
    return 'queue';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['supervisor_id', 'student_id'],

      properties: {
        id: { type: 'integer' },
        supervisor_id: { type: 'integer' },
        student_id: { type: 'string' },
        created_at: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const Supervisor = require('./supervisor');
    const Student = require('./student');

    return {
      supervisor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Supervisor,
        join: {
          from: 'supervisor.id',
          to: 'queue.supervisor_id'
        }
      },
      student: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'student.id',
          to: 'queue.student_id'
        }
      }
    };
  }
}

module.exports = Queue;
