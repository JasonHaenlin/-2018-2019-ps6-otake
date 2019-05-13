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
        small_picture: { type: 'string', minLength: 2, maxLength: 255 },
        big_picture: { type: 'string', minLength: 2, maxLength: 255 },
        description: { typ: 'string', minLength: 40, maxLength: 1000 },
        topics_card: { type: 'string', minLength: 2, maxLength: 255 },
        topics_details: { type: 'string', minLength: 10, maxLength: 2048 },
        career: { type: 'string', minLength: 10, maxLength: 2048 }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Major = require('./major');
    const PastContract = require('./past-contract');

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
      },
      past_contract: {
        relation: Model.HasManyRelation,
        modelClass: PastContract,
        join: {
          from: 'past_contract.speciality_id',
          to: 'speciality.id'
        }
      }
    };
  }
}

module.exports = Speciality;
