const Model = require('./config');

class PastContract extends Model {
  static get tableName() {
    return 'past_contract';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['university_id', 'link'],
      properties: {
        id: { type: 'integer' },
        year: { type: 'integer' },
        semester: { type: 'string', minLength: 2, maxLength: 5 },
        university_id: { type: 'integer' },
        speciality_id: { type: 'integer' },
        link: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  static get relationMappings() {
    const ExchangeUniversity = require('./exchange-university');
    const Speciality = require('./speciality');

    return {
      university: {
        relation: Model.BelongsToOneRelation,
        modelClass: ExchangeUniversity,
        join: {
          from: 'exchange_university.id',
          to: 'past_contract.university_id'
        }
      },
      speciality: {
        relation: Model.HasManyRelation,
        modelClass: Speciality,
        join: {
          from: 'speciality.id',
          to: 'past_contract.speciality_id'
        }
      }
    };
  }
}

module.exports = PastContract;
