require('../../server');
const assert = require('assert');

const { supervisor } = require('../../app/controller/school');


describe('supervisor controller to database', () => {
  it('should get the list of supervisors from the database', async () => {
    const res = await supervisor.getSupervisors();
    assert.ok(res.length > 0);
  });
});
