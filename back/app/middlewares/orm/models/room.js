const Model = require('./config');

class Room extends Model {
  static get tableName() {
    return 'room';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['label'],

      properties: {
        id: { type: 'integer' },
        label: { type: 'string', minLength: 5, maxLength: 50 }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const Supervisor = require('./supervisor');

    return {
      supervisor: {
        relation: Model.HasManyRelation,
        modelClass: Supervisor,
        join: {
          from: 'supervisor.room_id',
          to: 'room.id'
        }
      }
    };
  }
}

module.exports = Room;
