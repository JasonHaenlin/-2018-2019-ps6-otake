const Model = require('./config');

/**
 * *tableName* return the name of the table
 * and relationMappings describe the relationship.
 * In this case, the key of the outside object author is how
 * we will refer to the parent class. The relation key
 * within the child object has the value *Model.BelongsToOneRelation*
 * which says that each ticket is going to have one parent author.
 */
class Ticket extends Model {
  static get tableName() {
    return 'ticket';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'author_id'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 5, maxLength: 100 },
        description: { type: ['string', 'null'], minLength: 5, maxLength: 255 },
        author_id: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    // we need this to avoid circular dependency
    const Author = require('./author');

    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'ticket.author_id',
          to: 'author.id'
        }
      }
    };
  }
}

module.exports = Ticket;
