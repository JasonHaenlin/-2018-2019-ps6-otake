
const Model = require('./config');

class ExchangeUniversity extends Model {
  static get tableName() {
    return 'exchange_university';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'city_id'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 5, maxLength: 255 },
        city_id: { type: 'integer' },
        cost_of_living: { type: 'integer' },
        nb_of_place: { type: 'integer' },
        admission_rate: { type: 'integer' },
        type_of_file: { type: 'string', minLength: 5, maxLength: 20 },
        small_picture: { type: 'string', minLength: 5, maxLength: 255 },
        big_picture: { type: 'string', minLength: 5, maxLength: 255 },
        presentation_text: { type: 'string', minLength: 5, maxLength: 2000 },
        admission_text: { type: 'string', minLength: 5, maxLength: 2000 },
        student_life_text: { type: 'string', minLength: 5, maxLength: 2000 },
        cost_of_living_text: { type: 'string', minLength: 5, maxLength: 2000 }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const City = require('./city');
    const Language = require('./language');
    const Major = require('./major');
    const Testimonial = require('./testimonial');

    return {
      city: {
        relation: Model.BelongsToOneRelation,
        modelClass: City,
        join: {
          from: 'exchange_university.city_id',
          to: 'city.id'
        }
      },
      language: {
        relation: Model.ManyToManyRelation,
        modelClass: Language,
        join: {
          from: 'exchange_university.id',
          through: {
            from: 'university_language.university_id',
            to: 'university_language.language_id'
          },
          to: 'language.id'
        }
      },
      major: {
        relation: Model.ManyToManyRelation,
        modelClass: Major,
        join: {
          from: 'exchange_university.id',
          through: {
            from: 'study_departement.university_id',
            to: 'study_departement.study_id'
          },
          to: 'major.id'
        }
      },
      testimonial: {
        relation: Model.HasManyRelation,
        modelClass: Testimonial,
        join: {
          from: 'testimonial.university_id',
          to: 'exchange_university.id'
        }
      }
    };
  }
}

module.exports = ExchangeUniversity;
