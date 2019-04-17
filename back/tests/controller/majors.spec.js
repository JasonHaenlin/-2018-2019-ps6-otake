require('../../server');
const assert = require('assert');

const { major } = require('../../app/controller/school');


describe('major controller to database', () => {
  it('should get the list of majors from the database', async () => {
    const res = await major.getMajors();
    assert.ok(res.length > 0);
  });

  it('should get a major from the database', async () => {
    const r = await major.getMajor('SI');
    assert.ok(r);
  });

});
