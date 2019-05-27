require('../../server');
const assert = require('assert');

const { User } = require('../../app/middlewares/orm');

describe('User controller to database', () => {
  it('should get the list of user from the database', async () => {
    const res = await User.query();
    assert.ok(res.length > 0);
  });
});
