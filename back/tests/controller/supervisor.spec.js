require('../../server');
const assert = require('assert');

const { supervisor } = require('../../app/controller/school');


describe('supervisor controller to database', () => {
  it('should get the list of supervisors from the database', async () => {
    const res = await supervisor.getSupervisors();
    assert.ok(res.length > 0);
  });
  it('should get the list of supervisors from the database', async () => {
    const res = await supervisor.getSupervisorByCategory('Echange-SI');
    assert.ok(res.length > 0);
  });
  it('should get the list of supervisors filter by title from the database', async () => {
    const res = await supervisor.getSupervisorByTitle('Signature');
    console.log(res);

    assert.ok(res.length > 0);
  });
});
