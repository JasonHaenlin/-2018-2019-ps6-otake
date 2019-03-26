
const Model = require('./config');

/**
 * *tableName* return the name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object author is how
 * we will refer to the parent class. The relation key
 * within the child object has the value *Model.BelongsToOneRelation*
 * which says that each ticket is going to have one parent author.
 */
class City extends Model {
  static get tableName() {
    return 'city';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'country_id'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 5, maxLength: 50 },
        country_id: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const Country = require('./country');
    const ExchangeUniversity = require('./exchangeUniversity');

    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: 'city.country_id',
          to: 'country.id'
        }
      },
      exchange_university: {
        relation: Model.HasManyRelation,
        modelClass: ExchangeUniversity,
        join: {
          from: 'city.id',
          to: 'exchange_university.city_id'
        }
      }
    };
  }
}

module.exports = City;
