const Model = require('./config');

class Deadline extends Model {
  static get tableName() {
    return 'deadline';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['opening_year', 'closing_year', 'date', 'title'],

      properties: {
        id: { type: 'integer' },
        opening_year: { type: 'integer' },
        closing_year: { type: 'integer' },
        date: { type: 'date' },
        title: { type: 'string', minLength: 5, maxLength: 50 },
        details: { type: 'string', minLength: 5, maxLength: 150 }
      }
    };
  }
}

module.exports = Deadline;
