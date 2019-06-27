
require('../../server');
const assert = require('assert');

const { queue } = require('../../app/controller/queue');

describe('queue controller to database', () => {
  it('should get the list of queue from the database', async () => {
    const res = await queue.getQueue();
    console.log(res);

    assert.ok(res.length > 0);
  });
  it('should get the list of queue sort by room from the database', async () => {
    const res = await queue.getQueue(0, null);
    assert.ok(res.length > 0);
  });
  it('should get the list of queue sort by student from the database', async () => {
    const res = await queue.getQueue(null, 'bc06b188-5f63-4bdb-bd1e-481efa8e91a3');
    assert.ok(res.length > 0);
  });
});
