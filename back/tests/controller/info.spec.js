require('../../server');
const assert = require('assert');

const { info } = require('../../app/controller/school');


describe('deadline controller to database', () => {
  it('should get the list of deadline from the database by years', async () => {
    const res = await info.getDeadlineByYears(2018, 2019);
    assert.ok(res.length === 2);
  });
  it('should NOT get the list of deadline from the database by years', async () => {
    const res = await info.getDeadlineByYears(2017, 2018);
    assert.ok(res.length === 0);
  });
});
