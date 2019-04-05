require('../../server');
const assert = require('assert');

const { MajorSpeciality } = require('../../app/middlewares/orm');

const getMajorSpecJunction = () => {
  return MajorSpeciality.query();
};

describe('major-spec controller to database', () => {
  it('should get the list of major spec juntions from the database', async () => {
    const res = await getMajorSpecJunction();
    assert.ok(res.length > 0);
  });
});
