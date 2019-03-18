const Model = require('./config');

/**
 * *tableName* return the name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object ticket is how
 * we will refer to the parent class. The relation key
 * within the child object has the value *Model.HasManyRelation*
 * which says that each author can have multiple tickets.
 */
class Major extends Model {
  static get tableName() {
    return 'major';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'shorthand'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 3, maxLength: 100 },
        shorthand: { type: 'string', minLength: 1, maxLength: 9 },
        icon: { type: ['string', 'null'], minLength: 5, maxLength: 255 }
      }
    };
  }
}

module.exports = Major;
