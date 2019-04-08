const Model = require('./config');

class Testimonial extends Model {
  static get tableName() {
    return 'testimonial';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['university_id','major_id','first_name', 'last_name'],
      properties: {
        id: { type: 'integer' },
        university_id: { type: 'integer'},
        first_name: { type: 'string', minLength: 2, maxLength: 50},
        last_name: { type: 'string', minLength: 2, maxLength: 50},
        email: { type: 'string', minLength: 7, maxLength: 50},
        major_id: { type: 'integer'},
        nationality: { type: 'string', minLength: 2, maxLength: 3},
        text: { type: 'string', minLength: 5, maxLength: 255}
      }
    };
  }

  static get modifiers() {
    return {
      titleOnly: builder => builder.select('title')
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
        relation: Model.HasOneRelation,
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
