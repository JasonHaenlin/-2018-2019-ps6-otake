const Model = require('./config');
class Supervisor extends Model {
  static get tableName() {
    return 'supervisor';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'title', 'email'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 2, maxLength: 50 },
        title: { type: 'string', minLength: 2, maxLength: 30 },
        email: { type: 'string', minLength: 5, maxLength: 50 },
        category: { type: 'string', minLength: 5, maxLength: 50 },
        room_id: { type: 'integer' },
        availability: { type: 'boolean' }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const User = require('./user');
    const Room = require('./room');

    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'user.supervisor_id',
          to: 'supervisor.id'
        }
      },
      room: {
        relation: Model.BelongsToOneRelation,
        modelClass: Room,
        join: {
          from: 'room.id',
          to: 'supervisor.room_id'
        }
      }
    };
  }
}

module.exports = Supervisor;
