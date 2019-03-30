const Model = require('./config');

/**
 * *tableName* return the country_name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object author is how
 * we will refer to the parent class.
 * The relation key
 * within the child object has the value *Model.BelongsToOneRelation*
 * which says that each ticket is going to have one parent author.
 * The relation key
 * within the child object has the value *Model.HasManyRelation*
 * which says that each author can have multiple tickets.
 */
class Country extends Model {
  static get tableName() {
    return 'country';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['country_name', 'area_id'],

      properties: {
        id: { type: 'integer' },
        country_name: { type: 'string', minLength: 5, maxLength: 50 },
        area_id: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const GeographicalArea = require('./geographical-area');
    const City = require('./country');

    return {
      geographical_area: {
        relation: Model.BelongsToOneRelation,
        modelClass: GeographicalArea,
        join: {
          from: 'country.area_id',
          to: 'geographical_area.id'
        }
      },

      city: {
        relation: Model.HasManyRelation,
        modelClass: City,
        join: {
          from: 'country.id',
          to: 'city.country_id'
        }
      }
    };
  }
}

module.exports = Country;
