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
    const MajorSpeciality = require('./major-speciality');

    return {
      MajorSpeciality: {
        relation: Model.HasManyRelation,
        modelClass: MajorSpeciality,
        join: {
          from: 'major_speciality.id',
          to: 'course.major_spec_id'
        }
      }
    };
  }
}

module.exports = Course;
