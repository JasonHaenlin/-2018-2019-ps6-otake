const Model = require('./config');

class ObjectSupervisor extends Model {
  static get tableName() {
    return 'object_supervisor';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['supervisor_id', 'object_id'],
      properties: {
        supervisor_id: { type: 'integer' },
        object_id: { type: 'integer' }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Supervisor = require('./supervisor');
    const Object = require('./object');

    return {
      supervisor: {
        relation: Model.HasManyRelation,
        modelClass: Supervisor,
        join: {
          from: 'objet_supervisor.supervisor_id',
          to: 'supervisor.id'
        }
      },
      object: {
        relation: Model.HasManyRelation,
        modelClass: Object,
        join: {
          from: 'objet_supervisor.object_id',
          to: 'object.id'
        }
      }
    };
  }
}

module.exports = ObjectSupervisor;
