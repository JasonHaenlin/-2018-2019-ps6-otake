
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
        name: { type: 'string', minLength: 5, maxLength: 50 },
        city_id: { type: 'integer' },
        cost_of_living: { type: 'integer' },
        nb_of_place: { type: 'integer' },
        admission_rate: { type: 'integer' },
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

    return {
      city: {
        relation: Model.BelongsToOneRelation,
        modelClass: City,
        join: {
          from: 'exchange_university.city_id',
          to: 'city.id'
        }
      }
    };
  }
}

module.exports = ExchangeUniversity;
