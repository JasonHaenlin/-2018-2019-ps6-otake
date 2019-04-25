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
        major_id: { type: 'integer' },
        link: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  static get relationMappings() {
    const ExchangeUniversity = require('./exchange-university');

    return {
      university: {
        relation: Model.HasManyRelation,
        modelClass: ExchangeUniversity,
        join: {
          from: 'exchange_university.id',
          to: 'past_contract.university_id'
        }
      }
    };
  }
}

module.exports = PastContract;
