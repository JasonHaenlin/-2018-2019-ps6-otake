const { Deadline } = require('../../middlewares/orm/models');

module.exports = {
  getDeadlineByYears(opening_date, closing_date) {
    return Deadline.query()
      .alias('d')
      .select('d.date', 'd.title', 'd.details')
      .where({ opening_year: opening_date })
      .andWhere({ closing_year: closing_date });
  }
};
