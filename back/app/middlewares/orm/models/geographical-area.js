const Model = require('./config');

class GeographicalArea extends Model {
  static get tableName() {
    return 'geographical_area';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['area_name', 'shorthand'],

      properties: {
        id: { type: 'integer' },
        area_name: { type: 'string', minLength: 3, maxLength: 30 },
        shorthand: { type: 'string', minLength: 2, maxLength: 10 },
        icon: { type: 'string', minLength: 5, maxLength: 100 }
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
