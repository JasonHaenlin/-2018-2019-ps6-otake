require('../../server');
const assert = require('assert');

const { PastContract } = require('../../app/middlewares/orm');

const getContracts = () => {
    return PastContract.query();
  };

  describe('past contracts to database', () => {
    it('should get the list of contracts from the database', async () => {
        const res = await getContracts();
        assert.ok(res.length > 0);
      });
  })