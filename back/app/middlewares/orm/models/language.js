const Model = require('./config');
class Language extends Model {
  static get tableName() {
    return 'language';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['language', 'icon_url'],
      properties: {
        id: { type: 'integer' },
        language: { type: 'string', minLength: 2, maxLength: 30 },
        icon_url: { type: 'string', minLength: 2, maxLength: 50 }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const UniversityLanguage = require('./university_language');
    const ExchangeUniversity = require('./exchange-university');

    return {
      language: {
        relation: Model.HasManyRelation,
        modelClass: UniversityLanguage,
        join: {
          from: 'language.id',
          to: 'university_language.language_id'
        }
      },
      university: {
        relation: Model.ManyToManyRelation,
        modelClass: ExchangeUniversity,
        join: {
          from: 'language.id',
          through: {
            from: 'university_language.language_id',
            to: 'university_language.university_id'
          },
          to: 'exchange_university.id'
        }
      }
    };
  }
}

module.exports = Language;
