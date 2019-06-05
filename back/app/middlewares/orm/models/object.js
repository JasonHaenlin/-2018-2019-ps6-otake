const Model = require('./config');

class Object extends Model {
  static get tableName() {
    return 'object';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 5, maxLength: 256 }
      }
    };
  }
}

module.exports = Object;
