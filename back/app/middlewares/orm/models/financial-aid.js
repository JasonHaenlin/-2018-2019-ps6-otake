const Model = require('./config');

class FinancialAid extends Model {
  static get tableName() {
    return 'financial_aid';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'description', 'conditionsToApply', 'termsOfPayment', 'procedure', 'cumul'],

      properties: {
        name: { type: 'string', minLength: 5, maxLength: 50 },
        description: { type: 'string', minLength: 5, maxLength: 150 },
        conditionsToApply: { type: 'string', minLength: 5, maxLength: 150 },
        termsOfPayment: { type: 'string', minLength: 5, maxLength: 150 },
        procedure: { type: 'string', minLength: 5, maxLength: 150 },
        cumul: { type: 'string', minLength: 5, maxLength: 150 }
      }
    };
  }
}

module.exports = FinancialAid;
