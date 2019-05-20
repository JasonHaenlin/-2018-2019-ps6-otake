const Model = require('./config');

class Testimonial extends Model {
  static get tableName() {
    return 'testimonial';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'university_id', 'major_id', 'first_name', 'last_name', 'text'],
      properties: {
        id: { type: 'integer' },
        university_id: { type: 'integer' },
        major_id: { type: 'integer' },
        first_name: { type: 'string', minLength: 2, maxLength: 50 },
        last_name: { type: 'string', minLength: 2, maxLength: 50 },
        email: { type: 'string', minLength: 7, maxLength: 50 },
        nationality: { type: 'string', minLength: 2, maxLength: 3 },
        picture: { type: 'string', minLength: 10, maxLength: 100 },
        text: { type: 'string', minLength: 5, maxLength: 1000 }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const ExchangeUniversity = require('./exchange-university');
    const Major = require('./major');

    return {
      studyDepartement: {
        relation: Model.HasOneRelation,
        modelClass: Major,
        join: {
          from: 'major.id',
          to: 'testimonial.major_id'
        }
      },
      university: {
        relation: Model.BelongsToOneRelation,
        modelClass: ExchangeUniversity,
        join: {
          from: 'exchange_university.id',
          to: 'testimonial.university_id'
        }
      }
    };
  }
}

module.exports = Testimonial;
