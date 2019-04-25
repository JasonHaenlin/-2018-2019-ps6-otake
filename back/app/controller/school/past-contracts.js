const { PastContract } = require('../../middlewares/orm');

module.exports = {
  getPastContracts() {
    return PastContract.query();
  }

};
