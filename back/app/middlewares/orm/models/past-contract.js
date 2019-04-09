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
        major_id: { type: 'integer' },
        year: { type: 'integer' },
        semester: { type: 'string', minLength: 2, maxLength: 2 },
        university_id: { type: 'integer' },
        shorthand: { type: 'string', minLength: 1, maxLength: 10 },
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
