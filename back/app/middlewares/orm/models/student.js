const Model = require('./config');

class Student extends Model {
  static get tableName() {
    return 'student';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name'],

      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 5, maxLength: 50 },
        last_name: { type: 'string', minLength: 5, maxLength: 50 }
      }
    };
  }
}

module.exports = Student;
