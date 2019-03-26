const Model = require('./config');

/**
 * *tableName* return the name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object ticket is how
 * we will refer to the parent class. The relation key
 * within the child object has the value *Model.HasManyRelation*
 * which says that each author can have multiple tickets.
 */
class Language extends Model {
  static get tableName() {
    return 'language';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['university_id', 'language', 'level'],
      properties: {
        university_id: { type: 'integer' },
        language: { type: 'string' },
        level: { type: 'string', enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] }
      }
    };
  }
}

module.exports = Language;
