const { Deadline } = require('../../middlewares/orm');

module.exports = {
  getDeadlineByYears(opening_date, closing_date) {
    return Deadline.query()
      .where({ opening_year: opening_date })
      .andWhere({ closing_year: closing_date });
  }
};
