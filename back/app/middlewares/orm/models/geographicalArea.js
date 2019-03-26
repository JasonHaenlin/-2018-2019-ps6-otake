const Model = require('./config');

/**
 * *tableName* return the name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object ticket is how
 * we will refer to the parent class. The relation key
 * within the child object has the value *Model.HasManyRelation*
 * which says that each author can have multiple tickets.
 */
class GeographicalArea extends Model {
  static get tableName() {
    return 'geographical_area';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'shorthand'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 3, maxLength: 100 },
        icon: { type: ['string', 'null'], minLength: 5, maxLength: 255 }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Country = require('./country');

    return {
      country: {
        relation: Model.HasManyRelation,
        modelClass: Country,
        join: {
          from: 'geographical_area.id',
          to: 'country.area_id'
        }
      }
    };
  }
}

module.exports = GeographicalArea;
