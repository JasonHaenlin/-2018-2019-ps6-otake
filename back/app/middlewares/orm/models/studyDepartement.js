const Model = require('./config');

class studyDepartement extends Model {
  static get tableName() {
    return 'study_departement';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['university_id', 'study_id'],
      properties: {
        university_id: { type: 'integer' },
        study_id: { type: 'integer' }
      }
    };
  }
  static get relationMappings() {
    // we need this to avoid circular dependency
    const Major = require('./major');

    return {
      major: {
        relation: Model.BelongsToOneRelation,
        modelClass: Major,
        join: {
          from: 'major.id',
          to: 'study_departement.study_id'
        }
      }
    };
  }
}

module.exports = studyDepartement;
