const Model = require('./config');

class Major extends Model {
  static get tableName() {
    return 'major';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'shorthand'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 5, maxLength: 50 },
        shorthand: { type: 'string', minLength: 1, maxLength: 10 },
        icon: { type: 'string', minLength: 5, maxLength: 100 }
      }
    };
  }
}

module.exports = Major;
