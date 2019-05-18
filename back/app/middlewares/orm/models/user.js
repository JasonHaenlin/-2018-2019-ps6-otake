const Model = require('./config');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['supervisor_id', 'username', 'hash'],
      properties: {
        supervisor_id: { type: 'integer' },
        username: { type: 'string', minLength: 2, maxLength: 50 },
        hash: { type: 'string', maxLength: 60 }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const Supervisor = require('./supervisor');

    return {
      supervisor: {
        relation: Model.HasOneRelation,
        modelClass: Supervisor,
        join: {
          from: 'supervisor.id',
          to: 'user.supervisor_id'
        }
      }
    };
  }
}

module.exports = User;
