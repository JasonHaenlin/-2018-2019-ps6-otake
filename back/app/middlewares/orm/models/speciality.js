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
    const Major = require('./major');

    return {
      major: {
        relation: Model.ManyToManyRelation,
        modelClass: Major,
        join: {
          from: 'speciality.id',
          through: {
            from: 'major_speciality.speciality_id',
            to: 'major_speciality.major_id'
          },
          to: 'major.id'
        }
      }
    };
  }
}

module.exports = Speciality;
