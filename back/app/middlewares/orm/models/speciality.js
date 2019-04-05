const Model = require('./config');

class Speciality extends Model {
  static get tableName() {
    return 'speciality';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'shorthand', 'description'],
      properties: {
        name: { type: 'string' },
        shorthand: { type: 'string' },
        description: { typ: 'string' }
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
          from: 'major.id',
          to: 'major_speciality.speciality_id'
        }
      }
    };
  }
}

module.exports = Speciality;
