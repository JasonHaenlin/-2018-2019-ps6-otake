
const Model = require('./config');

/**
 * *tableName* return the name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object author is how
 * we will refer to the parent class. The relation key
 * within the child object has the value *Model.BelongsToOneRelation*
 * which says that each ticket is going to have one parent author.
 */
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
        name: { type: 'string', minLength: 5, maxLength: 100 },
        city_id: { type: 'integer' },
        cost_of_living: { type: 'integer' },
        nb_of_place: { type: 'integer' },
        admission_rate: { type: 'integer' },
        small_picture: { type: 'string', minLength: 5, maxLength: 500 },
        big_picture: { type: 'string', minLength: 5, maxLength: 500 },
        presentation_text: { type: 'string', minLength: 5, maxLength: 500 },
        admission_text: { type: 'string', minLength: 5, maxLength: 500 },
        student_life_text: { type: 'string', minLength: 5, maxLength: 500 },
        cost_of_living_text: { type: 'string', minLength: 5, maxLength: 500 }
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
