
require('../../server');
const assert = require('assert');

const { queue } = require('../../app/controller/queue');

describe('queue controller to database', () => {
  it('should get the list of queue from the database', async () => {
    const res = await queue.getQueue();
    console.log(res);

    assert.ok(res.length > 0);
  });
});
