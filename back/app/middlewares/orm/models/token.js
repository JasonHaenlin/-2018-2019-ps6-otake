const Model = require('./config');

class Token extends Model {
  static get tableName() {
    return 'token';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['token', 'expires_at'],
      properties: {
        id: { type: 'integer' },
        token: { type: 'string', minLength: 8, maxLength: 64 },
        status: { type: 'string', enum: ['pending', 'completed', 'blocked'] },
        expires_at: { type: 'date' }
      }
    };
  }
}

module.exports = Token;
