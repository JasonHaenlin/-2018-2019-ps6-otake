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
        id: {type: 'integer'},
        name: {type: 'string', minLength: 2, maxLength: 50},
        title: {type: 'string', minLength: 2, maxLength: 30},
        email: {type: 'string', minLength: 5, maxLength: 50},
        category: {type: 'string', minLength: 5,maxLength: 50}
      }
    };
  }
}

module.exports = Supervisor;
