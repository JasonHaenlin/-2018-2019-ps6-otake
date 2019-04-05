const Model = require('./config');

class UniversityLanguage extends Model {
  static get tableName() {
    return 'university_language';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['university_id', 'language', 'level'],
      properties: {
        university_id: { type: 'integer' },
        language_id: { type: 'integer' },
        level: { type: 'string', enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const University = require('./exchangeUniversity');
    const Language = require('./language');

    return {
      university: {
        relation: Model.BelongsToOneRelation,
        modelClass: University,
        join: {
          from: 'university_language.university_id',
          to: 'exchange_university.id'
        }
      },
      language: {
        relation: Model.BelongsToOneRelation,
        modelClass: Language,
        join: {
          from: 'university_language.language_id',
          to: 'language.id'
        }
      }
    };
  }
}

module.exports = UniversityLanguage;
