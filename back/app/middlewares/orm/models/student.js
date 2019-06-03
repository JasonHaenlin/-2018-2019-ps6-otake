const Model = require('./config');

class Student extends Model {
  static get tableName() {
    return 'student';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'major_id'],

      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 5, maxLength: 50 },
        last_name: { type: 'string', minLength: 5, maxLength: 50 },
        major: { type: 'integer' }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Major = require('./major');

    return {
      major: {
        relation: Model.BelongsToOneRelation,
        modelClass: Major,
        join: {
          from: 'major.id',
          to: 'student.major_id'
        }
      }
    };
  }
}

module.exports = Student;
