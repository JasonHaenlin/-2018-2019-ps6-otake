const Model = require('./config');

class Course extends Model {
  static get tableName() {
    return 'course';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['major_spec_id', 'title'],
      properties: {
        major_spec_id: { type: 'integer' },
        title: { type: 'string' }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Major = require('./major');

    return {
      majorCourses: {
        relation: Model.ManyToManyRelation,
        modelClass: Major,
        join: {
          from: 'course.major_spec_id',
          through: {
            from: 'major_speciality.id',
            to: 'major_speciality.major_id'
          },
          to: 'major.id'
        }
      }
    };
  }
}

module.exports = Course;
