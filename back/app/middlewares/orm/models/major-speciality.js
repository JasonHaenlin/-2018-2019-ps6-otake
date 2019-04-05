const Model = require('./config');

class MajorSpeciality extends Model {
  static get tableName() {
    return 'major_speciality';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['major_id', 'speciality_id'],
      properties: {
        major_id: { type: 'integer' },
        speciality_id: { type: 'integer' }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Speciality = require('./speciality');
    const Major = require('./major');

    return {
      major: {
        relation: Model.HasManyRelation,
        modelClass: Major,
        join: {
          from: 'major_speciality.major_id',
          to: 'major.id'
        }
      },
      speciality: {
        relation: Model.HasManyRelation,
        modelClass: Speciality,
        join: {
          from: 'major_speciality.speciality_id',
          to: 'speciality.id'
        }
      }
    };
  }
}

module.exports = MajorSpeciality;
