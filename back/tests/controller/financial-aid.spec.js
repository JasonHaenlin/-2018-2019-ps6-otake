require('../../server');
const assert = require('assert');

const { financialAid } = require('../../app/controller/universities');

describe('financialAid controller to database', () => {
  it('should get the list of financialAids from the database', async () => {
    const res = await financialAid.getFinancialAids();
    assert.ok(res.length > 0);
  });
});
